import { Injectable, NotFoundException } from '@nestjs/common';
import { Category } from './book-cat.schema';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BookCatService {
    constructor(
        @InjectModel(Category.name) 
        private categoryModel: mongoose.Model<Category>,
    ) { }

    async findAll(): Promise<Category[]> {
        const categories = await this.categoryModel.find();
        return categories;
    }

    async findById(id: string): Promise<Category> {
        const category = await this.categoryModel.findById(id).exec();
        if (!category) {
            throw new NotFoundException('Category not found');
        }
        return category;
    }

    async create(category: Category): Promise<Category> {
        const res = await this.categoryModel.create(category);
        return res;
    }

    async updateById(
        id: string,
        category: Category,
    ): Promise<Category> {
        const updatedCategory = await this.categoryModel
            .findByIdAndUpdate(id, category, { new: true })
            .exec();
        if (!updatedCategory) {
            throw new NotFoundException('Category not found');
        }
        return updatedCategory;
    }

    async deleteById(id: string): Promise<Category> {
        const deletedCategory = await this.categoryModel.findByIdAndDelete(id).exec();
        if (!deletedCategory) {
            throw new NotFoundException('Category not found');
        }
        return deletedCategory;
    }
}