import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';
@Module({
  imports: [
    BookModule,
    MongooseModule.forRoot(
      'mongodb+srv://vannidev:cywLjvwLZKtlkWom@cluster0.amim0eo.mongodb.net/nestjs-demo',
    ),
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
