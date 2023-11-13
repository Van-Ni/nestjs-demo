import { Module } from '@nestjs/common';
import { BookCatService } from './book-cat.service';
import { BookCatController } from './book-cat.controller';

@Module({
  providers: [BookCatService],
  controllers: [BookCatController]
})
export class BookCatModule {}
