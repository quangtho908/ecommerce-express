import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "./dto/CreateUserDto";
import { UpdateUserDto } from "./dto/UpdateUserDto";
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
 
    async create(user: CreateUserDto): Promise<User> {
        return await this.userModel.create(user);
    }

    async update( {id, data}: UpdateUserDto) {
        return await this.userModel.findByIdAndUpdate(id, data);
    }
}