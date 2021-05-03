import {Schema, SchemaFactory, Prop} from "@nestjs/mongoose";
import * as mongoose from "mongoose";

export type UserDocument = User & mongoose.Document;

@Schema()
export class User {

    @Prop({required: true})
    username: string

    @Prop({required: true})
    hash: string

    @Prop({required: true})
    token: string

    @Prop()
    phone: string

    @Prop()
    email: string

    @Prop({type: Object})
    address: any

    @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: "bills"}]})
    carts: any[]
}

export const UserSchema = SchemaFactory.createForClass(User);