import { Test, TestingModule } from '@nestjs/testing';
import { BookCatController } from './book-cat.controller';

describe('BookCatController', () => {
  let controller: BookCatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookCatController],
    }).compile();

    controller = module.get<BookCatController>(BookCatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
