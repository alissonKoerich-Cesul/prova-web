import { Controller, Get } from "@nestjs/common";
import { FindAllBooksService } from "./find-all-books.service"; 

@Controller('/books')
export class FindAllBooksController {
  constructor(private findAllBooks: FindAllBooksService) {}

  @Get()
  async handle() {
    const books = await this.findAllBooks.execute();

    return {
      books
    };
  }
}