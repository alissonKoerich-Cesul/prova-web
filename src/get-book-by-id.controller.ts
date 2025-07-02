import { Controller, Get, Param } from "@nestjs/common";
import { GetProductByIdService } from "./get-book-by-id.service"; 

@Controller('/books')
export class GetBooksByIdController {
  constructor(private getBooksByIdService: GetProductByIdService) {}

  @Get(':id')
  async handle(@Param("id") id: string) {
    const { books } = await this.getBooksByIdService.execute({ id });

    return {
      book: books,
    };
  }
}
