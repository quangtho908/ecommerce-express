import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateOrderDto } from "./dto/CreateOrderDto";
import { Order, OrderDocument } from "./order.model";


@Injectable()
export class OrderService {
    constructor(@InjectModel("bills") private orderModel: Model<OrderDocument>) {}

    async findAll(): Promise<Order[]> {
        return await this.orderModel.find({})
    }

    async findById(id: string): Promise<Order> {
        return await this.orderModel.findById(id);
    }

    async create(createOrderDto: CreateOrderDto): Promise<Order> {
        return await this.orderModel.create(createOrderDto);
    }

    async update(id: string, data: {[feildname: string]: any}): Promise<Order> {
        const result = await this.orderModel.findByIdAndUpdate(id, data);
        if(!result) throw new NotFoundException();
        return result;
    }

    async delete(id:string): Promise<Order> {
        const result = await this.orderModel.findByIdAndDelete(id);
        if(!result) throw new NotFoundException();
        return result;
    }
}