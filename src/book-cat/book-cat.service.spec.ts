import { Test, TestingModule } from '@nestjs/testing';
import { BookCatService } from './book-cat.service';

describe('BookCatService', () => {
  let service: BookCatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookCatService],
    }).compile();

    service = module.get<BookCatService>(BookCatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
