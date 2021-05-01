import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { ProductDocument } from "../product/product.model";
import { File, FileDocument } from "./library.model";

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel("libraries") private fileModel: Model<FileDocument>,
        @InjectModel("products") private productModel: Model<ProductDocument> 
    ) {}

    async findAll(): Promise<File[]> {
        return await this.fileModel.find();
    }

    async create(files: Express.Multer.File): Promise<File> {
        return await this.fileModel.insertMany(files);
    }
    
    async delete(id: string): Promise<File> {
        this.productModel.updateMany({}, {$pull: {images: Types.ObjectId(id)}}, {multi: true})
        return await this.fileModel.findByIdAndDelete(id);
    } 
}