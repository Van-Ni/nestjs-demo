import { Category } from './book-cat.schema';
import { BookCatService } from './book-cat.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category';
import { UpdateCategoryDto } from './dto/update-category';

@Controller('category')
export class BookCatController {
    constructor(private BookCatService: BookCatService) { }

    @Get()
    async getAllCategories(): Promise<Category[]> {
        return this.BookCatService.findAll();
    }

    @Post()
    async createCategory(
        @Body() category: any,
    ): Promise<Category> {
        return this.BookCatService.create(category);
    }

    @Get(':id')
    async getCategory(@Param('id') id: string): Promise<Category> {
        return this.BookCatService.findById(id);
    }

    @Put(':id')
    async updateCategory(
        @Param('id') id: string,
        @Body() categoryDto: UpdateCategoryDto,
    ): Promise<Category> {
        return this.BookCatService.updateById(id, categoryDto);
    }

    @Delete(':id')
    async deleteCategory(@Param('id') id: string): Promise<Category> {
        return this.BookCatService.deleteById(id);
    }
}