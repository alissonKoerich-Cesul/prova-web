import { Injectable } from "@nestjs/common";
import { BookRepository } from "./BookRepository"; 


interface CreateBookServiceRequest {
    id: string;
    title: string;
    author: string;
    publicationYear: number;  
    isbn: string;
}


@Injectable()
export class CreateProductService {
  constructor(private productsRepository: BookRepository) {}

  async execute({
    id,
    title,
    author,
    publicationYear,
    isbn,

  }: CreateBookServiceRequest): Promise<void> {
    const productWithSameTitle = await this.productsRepository.findByTitle(title);

    if (productWithSameTitle) {
      throw new Error("Book already exists");
    }

    const book = {
    id,
    title,
    author,
    publicationYear,
    isbn,
    
    };

    await this.productsRepository.create(book);
  }
}