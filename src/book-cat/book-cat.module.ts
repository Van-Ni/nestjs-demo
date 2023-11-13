import { Module } from '@nestjs/common';
import { BookCatService } from './book-cat.service';
import { BookCatController } from './book-cat.controller';
import { CategorySchema } from './book-cat.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Category', schema: CategorySchema }])],
  providers: [BookCatService],
  controllers: [BookCatController]

})
export class BookCatModule {}
