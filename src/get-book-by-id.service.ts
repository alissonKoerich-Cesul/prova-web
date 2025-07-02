import { Injectable } from "@nestjs/common";
import { BookRepository } from "./BookRepository"; 


export interface Book {
    id: string;
    title: string;
    author: string;
    publicationYear: number;  
    isbn: string;
}

interface GetBooksByIdServiceRequest {
  id: string;
}

type GetBooksByIdServiceResponse = {
  books: Book;
}

@Injectable()
export class GetProductByIdService {
  constructor(private booksRepository: BookRepository) {}

  async execute({
    id,
  }: GetBooksByIdServiceRequest): Promise<GetBooksByIdServiceResponse> {
    const book = await this.booksRepository.findById(id);

    if (!book) {
      throw new Error("Book not found");
    }

    const newBook: Book = {
      id: book.id!,
      title: book.title!,
      author: book.author,
      publicationYear: book.publicationYear,
      isbn: book.isbn,
    };
    return {
      books: newBook
    };
  }
}