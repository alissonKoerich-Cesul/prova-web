import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookRepository } from './BookRepository';
import { CreateBookController } from './create-book.controller';
import { CreateProductService } from './create-book.service';
import { DeleteBookService } from './delete-book.service';
import { EditBookService } from './edit-book.service';
import { FindAllBooksService } from './find-all-books.service';
import { GetProductByIdService } from './get-book-by-id.service';
import { EditBookController } from './edit-books.controller';
import { BooksController } from './find-all-books.controller';
import { GetBooksByIdController } from './get-book-by-id.controller';
import { DeleteBooksController} from './delete-book.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController, CreateBookController, EditBookController, BooksController, GetBooksByIdController, DeleteBooksController],
  providers: [AppService, BookRepository, PrismaService, CreateProductService,FindAllBooksService , DeleteBookService, EditBookService, FindAllBooksService, GetProductByIdService],
})
export class AppModule {}
