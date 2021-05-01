import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { CreateProductDto } from "./dto/CreateProductDto";
import { Product, ProductDocument } from "./product.model"
@Injectable()
export class ProductService {
    constructor(@InjectModel("products") private productModel: Model<ProductDocument>) {}

    async findAll(): Promise<Product[]> {
        return await this.productModel.find();
    }

    async findById(id: string): Promise<Product> {
        const product = await this.productModel.findOne({id});
        if(!product) throw new NotFoundException();
        return product;
    }
    async findByCategory(category: string): Promise<Product[]> {
        const result: Product[] = await this.productModel.find({category: {$in: [Types.ObjectId(category)]}}).populate("category")
        if(result.length === 0) throw new NotFoundException();
        return result;
    }

    async create(createProductDto: CreateProductDto): Promise<Product> {
        return await this.productModel.create(createProductDto);
    }

    async update(id: string , dataUpdate: {[feildname: string]: any}): Promise<Product> {
        const result: Product = await this.productModel.findOneAndUpdate({id}, dataUpdate);
        if(!result) throw new NotFoundException()
        return result;
    }

    async delete(id: string): Promise<Product> {
        const result: Product = await this.productModel.findOneAndDelete({id});
        if(!result) throw new NotFoundException();
        return result;
    }

    async deleteMany(ids: [{id: string}]): Promise<any> {
        return await this.productModel.deleteMany({...ids});
    }
}