import { Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "./prisma.service";

@Injectable()
export class BookRepository {
  constructor(private prisma: PrismaService) {}

    
  async findAll(): Promise<Prisma.BookUncheckedCreateInput[] | null> {
    return await this.prisma.book.findMany();
  }

  async findById(id: string): Promise<Prisma.BookUncheckedCreateInput | null> {
    return await this.prisma.book.findUnique({
      where: {
        id,
      }
    });
  }
  async findByISBN(isbn: string): Promise<Prisma.BookUncheckedCreateInput | null> {
    return await this.prisma.book.findUnique({
      where: {
        isbn,
      }
    });
  }

  async findByTitle(title: string): Promise<Prisma.BookUncheckedCreateInput | null> {
    const book = this.prisma.book.findUnique({
      where: {
        title,
      }
    });

    return book;
  }

  async save(data: Prisma.BookUncheckedCreateInput): Promise<void> {
    await Promise.all([
      this.prisma.book.update({
        where: {
          id: data.id?.toString(),
        },
        data,
      }),
    ]);
  }

  
  async create(book: Prisma.BookUncheckedCreateInput): Promise<void> {
    await this.prisma.book.create({
      data: book,
    });
  }

  async delete(book: Prisma.BookUncheckedCreateInput): Promise<void> {
    await this.prisma.book.delete({
      where: {
        id: book.id?.toString(),
      }
    });
  }

}


