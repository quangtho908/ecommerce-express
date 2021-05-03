import {Controller, Get, Post, Put, Body, Param, Delete, UsePipes, UseGuards} from "@nestjs/common";
import {} from "mongoose"
import { CheckAdminAuth } from "../guard/checkAdmin.guard";
import { CreateProductDto } from "./dto/CreateProductDto";
import { UpdateProductDto } from "./dto/UpdateProductDto";
import { Product } from "./product.model";
import { ProductService } from "./product.service";
import {validatorUpdate} from "./validators/validatorUpdate";
@Controller("product")
export class ProductController {
    constructor(private productService: ProductService) {}

    @Get()
    async findAll(): Promise<Product[]> {
        return await this.productService.findAll();
    }

    @Get("id/:id")
    async findById(@Param("id") id: string): Promise<Product> {
        return await this.productService.findById(id)
    }

    @Get("category/:category")
    async findByCategory(@Param("category") category: string): Promise<Product[]> {
        return await this.productService.findByCategory(category);
    }
    @UseGuards(CheckAdminAuth)
    @Post()
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return await this.productService.create(createProductDto);
    }
    @UseGuards(CheckAdminAuth)
    @Put()
    @UsePipes(new validatorUpdate())
    async update(@Body() updateProductDto: UpdateProductDto): Promise<Product> {
        return await this.productService.update(updateProductDto.id, updateProductDto.data)
    }
    @UseGuards(CheckAdminAuth)
    @Delete()
    async delete(@Body() deteleProductDto: {id: string}): Promise<Product> {
        return await this.productService.delete(deteleProductDto.id);
    }
}