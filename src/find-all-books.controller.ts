import { Controller, Get } from '@nestjs/common';
import { FindAllBooksService } from './find-all-books.service'; 
import { Book } from '@prisma/client';

@Controller('books')
export class BooksController {
  constructor(private readonly findAllBooksService: FindAllBooksService) {}

  @Get()
  async findAll() {
    const result = await this.findAllBooksService.execute();
    return result;
  }
}
