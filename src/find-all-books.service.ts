import { Injectable } from "@nestjs/common";
import { BookRepository } from "./BookRepository"; 
import { Book } from "@prisma/client";


type FindAllBooksServiceResponse = {
  book: Book[] | null;
}

@Injectable()
export class FindAllBooksService{
  constructor(private booksRepository: BookRepository) {}

  async execute(): Promise<FindAllBooksServiceResponse> {
    const books = await this.booksRepository.findAll();


    const validBooks = (books ?? []).filter((b): b is Book => typeof b.id === "string");

    return {
      book: validBooks.length > 0 ? validBooks : null
    };
  }
}