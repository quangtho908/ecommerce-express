import {Schema, Prop, SchemaFactory} from "@nestjs/mongoose";
import * as mongoose from "mongoose";
import { Status } from "./dto/CreateOrderDto";


export type OrderDocument = Order & mongoose.Document;

@Schema()
export class Order {
    @Prop({required: true})
    id: string

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "users", required: true})
    owner: any

    @Prop({type: mongoose.Schema.Types.ObjectId, ref: "products", required: true})
    product: any

    @Prop({required: true})
    status: Status
}

export const OrderSchema = SchemaFactory.createForClass(Order);
