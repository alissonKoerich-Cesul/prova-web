import { Injectable } from "@nestjs/common";
import { BookRepository } from "./BookRepository"; 
import { Book } from "@prisma/client";


type FindAllBooksServiceResponse = {
  books: Book[];
}

@Injectable()
export class FindAllBooksService{
  constructor(private booksRepository: BookRepository) {}

  async execute(): Promise<FindAllBooksServiceResponse> {
    const books = await this.booksRepository.findAll();

    const newBooks: Book[] = [];

    return {
      books: newBooks
    };
  }
}