import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CheckAdminAuth } from "../guard/checkAdmin.guard";
import { CheckAuthGuard } from "../guard/checkAuth.guard";
import { CreateOrderDto } from "./dto/CreateOrderDto";
import { Order } from "./order.model";
import { OrderService } from "./order.service";

@Controller("order")
export class OrderController {
    constructor(private orderService: OrderService) {}
    @UseGuards(CheckAdminAuth)
    @Get()
    async findAll(): Promise<Order[]> {
        return await this.orderService.findAll();
    }
    @UseGuards(CheckAuthGuard)
    @Get("id")
    async findById(@Param("id") id: string): Promise<Order> {
        return await this.orderService.findById(id);
    }

    @UseGuards(CheckAuthGuard)
    @Post()
    async create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return await this.orderService.create(createOrderDto);
    }

    @UseGuards(CheckAuthGuard)
    @Put()
    async update(@Body() {id, data}): Promise<Order> {
        return await this.orderService.update(id, data);
    }
    
    @UseGuards(CheckAuthGuard)
    @Delete()
    async delete(@Body() {id}): Promise<Order> {
        return await this.orderService.delete(id)
    }
}