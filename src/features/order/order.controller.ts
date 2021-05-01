import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CreateOrderDto } from "./dto/CreateOrderDto";
import { Order } from "./order.model";
import { OrderService } from "./order.service";

@Controller("order")
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get()
    async findAll(): Promise<Order[]> {
        return await this.orderService.findAll();
    }

    @Get("id")
    async findById(@Param("id") id: string): Promise<Order> {
        return await this.orderService.findById(id);
    }

    @Post()
    async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return await this.orderService.create(createOrderDto);
    }

    @Put()
    async update(@Body() {id, data}): Promise<Order> {
        return await this.orderService.update(id, data);
    }

    @Delete()
    async delete(@Body() {id}): Promise<Order> {
        return await this.orderService.delete(id)
    }
}