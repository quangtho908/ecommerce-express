import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./user.model";

@Injectable()
export class UserSerivce {
    constructor(@InjectModel("users") private userModel: Model<UserDocument>) {}

    async findUser(username: string): Promise<User> {
        return await this.userModel.findOne({username});
    }

    async findToken(token: string): Promise<User> {
        return await this.userModel.findOne({token});
    }
 
    async create(user: any) {
        return await this.userModel.create(user);
    }
}