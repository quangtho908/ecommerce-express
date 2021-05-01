import {Schema, SchemaFactory, Prop} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type ProductDocument = Product & mongoose.Document;

@Schema()
export class Product {
    @Prop()
    id: string

    @Prop()
    name: string

    @Prop()
    price: number

    @Prop()
    discount: number

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "categories"}]})
    category: any

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "libraries"}]})
    images: any[]

    @Prop({type: Object})
    detail: any
}

export const ProductSchema = SchemaFactory.createForClass(Product);