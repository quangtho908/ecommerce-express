import {Document} from "mongoose";
import {SchemaFactory, Prop, Schema} from "@nestjs/mongoose";

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
    @Prop({required: true})
    name: string
}

export const CategorySchema = SchemaFactory.createForClass(Category);