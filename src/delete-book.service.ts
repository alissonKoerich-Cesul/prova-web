import { Injectable } from "@nestjs/common";
import { BookRepository } from "./BookRepository";

interface DeleteBookServiceRequest {
  id: string;
}

@Injectable()
export class DeleteBookService {
  constructor(private booksRepository: BookRepository) {}

  async execute({
    id,
  }: DeleteBookServiceRequest): Promise<void> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new Error("Book not found");
    }

    await this.booksRepository.delete(book);
  }
}