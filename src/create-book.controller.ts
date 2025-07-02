import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { CreateProductService } from "./create-book.service"; 

interface CreateBookRequestBody {
  id: string;
  title: string;
  author: string;
  publicationYear: number;
  isbn: string;
}

@Controller('/books')
export class CreateBookController {
  constructor(private readonly createBookService: CreateProductService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: CreateBookRequestBody) {
    const {
      id,
      title,
      author,
      publicationYear,
      isbn,
    } = body;

    await this.createBookService.execute({
      id,
      title,
      author,
      publicationYear,
      isbn,
    });
  }
}
