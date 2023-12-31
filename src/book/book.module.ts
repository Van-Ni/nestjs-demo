import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './book.schema';
import { AuthMiddleware } from 'src/login/auth.middleware';
import { RoleMiddleware } from 'src/login/role.middleware';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes('book');
    consumer
      .apply(RoleMiddleware)
      .exclude(
        { path: 'book', method: RequestMethod.GET },
        { path: 'book/:id', method: RequestMethod.GET },
      )
      .forRoutes(BookController);
  }
}