import { Injectable, NotFoundException, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './book.schema';
import mongoose from 'mongoose';

@Injectable()
export class BookService implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log(`Incoming request - Method: ${req.method}, URL: ${req.url}`);

        // Kiểm tra xác thực tại đây
        if (!req.headers.authorization) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        next();
    }

    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>,
    ) { }
    async findAll(): Promise<Book[]> {
        const books = await this.bookModel.find();
        return books;
    }

    async create(book: Book): Promise<Book> {
        const res = await this.bookModel.create(book);
        return res;
    }

    async findById(id: string): Promise<Book> {
        const book = await this.bookModel.findById(id);

        if (!book) {
            throw new NotFoundException('Book not found.');
        }

        return book;
    }

    async updateById(id: string, book: Book): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(id, book, {
            new: true,
            runValidators: true,
        });
    }

    async deleteById(id: string): Promise<Book> {
        return await this.bookModel.findByIdAndDelete(id);
    }
}