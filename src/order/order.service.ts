import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { UserDocument } from "src/user/user.model";
import { CreateOrderDto } from "./dto/CreateOrderDto";
import { Order, OrderDocument } from "./order.model";


@Injectable()
export class OrderService {
    constructor(
        @InjectModel("bills") private orderModel: Model<OrderDocument>,
        @InjectModel("users") private userModel: Model<UserDocument>   
    ) {}

    async findAll(): Promise<Order[]> {
        return await this.orderModel.find({})
    }

    async findById(id: string): Promise<Order> {
        return await this.orderModel.findById(id);
    }

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        const result: Order = await this.orderModel.create(createOrderDto);
        this.userModel.findByIdAndUpdate(createOrderDto.userId, {$push: {carts: createOrderDto.id}})
        return result;
    }

    async update(id: string, data: {[feildname: string]: any}): Promise<Order> {
        const result = await this.orderModel.findByIdAndUpdate(id, data);
        if(!result) throw new NotFoundException();
        return result;
    }

    async delete(id:string): Promise<Order> {
        const result = await this.orderModel.findByIdAndDelete(id);
        if(!result) throw new NotFoundException();
        this.userModel.updateMany({}, {$pull: {carts: Types.ObjectId(id)}}, {multi: true});
        return result;
    }
}