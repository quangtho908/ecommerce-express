import ProductModel from "../models/product_model";
import mongoose from "../config/mongoose_config";
import { Request, Response } from "express";

export async function getProduct(req: Request, res: Response): Promise<void> {
    try{
        const data = await ProductModel.find({}).populate("category").limit(20);
        res.status(200).json({data});
    }catch{
        res.status(500).json({message: "Server has problem, please try again"})
    }
}

export async function getProductById(req: Request, res: Response): Promise<void>{
    try{
        const data = await ProductModel.findOne({id: req.params.id})
        .populate({path: "images", select: "path"})
        .populate("category")
        res.status(200).json({data});
        
    }catch{
        res.status(500).json({message: "Server has problem, please try again"})
    }
}

export async function getProductByCategory(req: Request, res: Response): Promise<void>{
    try{
        const data = await ProductModel.find({category: mongoose.Types.ObjectId(req.params.category)})
        .populate("category")
        res.status(200).json({data});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Server has problem, please try again"})
    }
}
export async function getPagination(req: Request, res: Response): Promise<void> {
    try{
        const index = parseInt(req.params.page);
        const start: number = (index - 1) * 20;
        const end: number = start + 20;
        const data = await ProductModel.find({});
        const result = ((data.length - start) < 20) ? data.slice(start) : data.slice(start, end);
        res.status(200).json({data: result});
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}

export async function createProduct(req: Request, res: Response): Promise<void> {
    try{
        await ProductModel.create(req.body);
        res.status(201).json({message: "Product is created"});
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}

export async function updateProduct(req: Request, res: Response) {
    try{
        const {field, data, id} = req.body;
        const newData = field === "category" ? mongoose.Types.ObjectId(data): data;
        await ProductModel.updateOne({id}, {[field]: newData});
        res.status(201).json({message: "Product is updated"})
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}

export async function deleteProduct(req: Request, res: Response) {
    try{
        await ProductModel.deleteOne({id: req.body.id})
        res.status(200).json({message: "Product is removed"});
    }catch{
        res.status(500).json({message: "Server has problem, please try again"});
    }
}