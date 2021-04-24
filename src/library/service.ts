import ImageModel from "../models/image_model";
import fs from "fs";
import {Request, Response} from "express";

export async function getImage(req: Request, res: Response): Promise<void> {
    try{
        const data: Express.Multer.File[] = await ImageModel.find({});
        res.status(200).json({data});
    }catch{
        res.status(500).json({message: "Server has problem, please try again"})
    }
}

export async function createImage(req: Request, res: Response): Promise<void> {
    try{
        await ImageModel.insertMany(req.files);
        res.status(201).json({message: "Images is added to library"});
    }catch{
        res.status(500).json({message: "Server has problem, please try again"})
    }
}

export async function deleteImage(req: Request, res: Response): Promise<void> {
    try{
        await ImageModel.deleteOne({path: req.body.path});
        fs.unlinkSync(req.body.path);
        res.status(200).json({message: "Image is removed"})
    }catch{
        res.status(500).json({message: "Server has problem, please try again"})
    }
}