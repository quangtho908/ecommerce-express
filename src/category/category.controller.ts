import {Controller, Get, Post, Delete, Put, Body, UsePipes} from "@nestjs/common";
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

    @Post()
    async createCategory(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
        return await this.categoryService.create(createCategoryDto);
    }

    @Put()
    async updateCategory(@Body() updateCategory: UpdateCategoryDto): Promise<Category> {
        return await this.categoryService.update(updateCategory);
    }
    
    @Delete()
    async deletCategory(@Body() updateCategoryDto: {id: string}): Promise<Category> {
        return await this.categoryService.delete(updateCategoryDto.id);
    }
}