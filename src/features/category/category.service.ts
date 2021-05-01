import {Injectable, NotFoundException} from "@nestjs/common";
import {InjectModel} from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { ProductDocument } from "../product/product.model";
import {Category, CategoryDocument} from "./category.model";
import {CreateCategoryDto} from "./dto/CreateCatgoryDto";
import {UpdateCategoryDto} from "./dto/UpdateCategoryDto";

@Injectable()
export class CategoryService {
    constructor(
        @InjectModel("categories") private categoryModel: Model<CategoryDocument>,
        @InjectModel("products") private productModel: Model<ProductDocument>
        ) {}

    async findAll(): Promise<Category[]> {
        return await this.categoryModel.find({});
    }

    async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
        return await this.categoryModel.create(createCategoryDto);
    }

    async update(updateCategoryDto: UpdateCategoryDto): Promise<Category> {
        const {id, name} = updateCategoryDto;
        const result: Category = await this.categoryModel.findByIdAndUpdate(id, {name});
        if(!result) throw new NotFoundException();
        return result;
    }

    async delete(id: string): Promise<Category> {
        const result: Category = await this.categoryModel.findByIdAndDelete(id);
        this.productModel.updateMany({}, {$pull: {category: Types.ObjectId(id)}}, {multi: true});
        if(!result) throw new NotFoundException()
        return result; 
    }
}