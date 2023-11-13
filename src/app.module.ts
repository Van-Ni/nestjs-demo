import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
import { AuthModule } from './login/auth.module';
import { BookCatModule } from './book-cat/book-cat.module';
import { ReviewModule } from './review/review.module';
import { CustomerModule } from './customer/customer.module';
@Module({
  imports: [
    BookModule,
    AuthModule,
    MongooseModule.forRoot(
      'mongodb+srv://vannidev:cywLjvwLZKtlkWom@cluster0.amim0eo.mongodb.net/nestjs-demo',
    ),
    BookCatModule,
    ReviewModule,
    CustomerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
