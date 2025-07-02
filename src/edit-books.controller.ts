import { Controller, Param, Body, Patch, NotFoundException } from "@nestjs/common";
import { EditBookService } from "./edit-book.service"; 

@Controller("/books")
export class EditBookController {
  constructor(private readonly editBookService: EditBookService) {}

  @Patch(":id")
  async handle(
    @Param("id") id: string,
    @Body() body: { title: string; author: string; publicationYear: number; isbn: string }
  ): Promise<void> {
    try {
      await this.editBookService.execute({
        id,
        title: body.title,
        author: body.author,
        publicationYear: body.publicationYear,
        isbn: body.isbn,
      });
    } catch (error) {
      if (error.message === "Book not found") {
        throw new NotFoundException("Livro não encontrado");
      }
      throw error;
    }
  }
}
