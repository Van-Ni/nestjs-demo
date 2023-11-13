import { RoleMiddleware } from 'src/login/role.middleware';
import { Book } from './book.schema';
import { BookService } from './book.service';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
  } from '@nestjs/common';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return this.bookService.findAll();
    }

    @Post()
    async createBook(
        @Body()
        book: any,
    ): Promise<Book> {
        return this.bookService.create(book);
    }

    @Get(':id')
    async getBook(
        @Param('id')
        id: string,
    ): Promise<Book> {
        return this.bookService.findById(id);
    }

    @Get('category/:categoryId')
    async getBooksByCategoryId(@Param('categoryId') categoryId: string) {
        return this.bookService.getBooksByCategoryId(categoryId);
    }

    @Put(':id')
    async updateBook(
        @Param('id')
        id: string,
        @Body()
        book: any,
    ): Promise<Book> {
        return this.bookService.updateById(id, book);
    }

    @Delete(':id')
    async deleteBook(
        @Param('id')
        id: string,
    ): Promise<Book> {
        return this.bookService.deleteById(id);
    }
}
