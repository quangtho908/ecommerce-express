import {Controller, Get, Post, Delete, Put, Body, UsePipes, UseGuards} from "@nestjs/common";
import { CheckAdminAuth } from "../guard/checkAdmin.guard";
import { Category} from "./category.model";
import {CategoryService} from "./category.service";
import { CreateCategoryDto } from "./dto/CreateCatgoryDto";
import { UpdateCategoryDto } from "./dto/UpdateCategoryDto";
@Controller("category")
export class CategoryController {
    constructor(private categoryService: CategoryService) {}

    @Get()
    async getCategory(): Promise<Category[]> {
        return await this.categoryService.findAll();
    }
    @UseGuards(CheckAdminAuth)
    @Post()
    async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        return await this.categoryService.create(createCategoryDto);
    }
    @UseGuards(CheckAdminAuth)
    @Put()
    async updateCategory(@Body() updateCategory: UpdateCategoryDto): Promise<Category> {
        return await this.categoryService.update(updateCategory);
    }
    @UseGuards(CheckAdminAuth)
    @Delete()
    async deletCategory(@Body() updateCategoryDto: {id: string}): Promise<Category> {
        return await this.categoryService.delete(updateCategoryDto.id);
    }
}