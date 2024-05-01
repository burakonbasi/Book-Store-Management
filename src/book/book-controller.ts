import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Book } from './book.model'; // Book modelini ekliyoruz
import { BookService } from './book.service';

@Controller('books')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAllBooks(): Promise<Book[]> {
    return await this.bookService.findAllBooks();
  }

  @Get(':id')
  async findBookById(@Param('id') id: number): Promise<Book | undefined> {
    return await this.bookService.findBookById(id);
  }

  @Post()
  async addBook(@Body() book: Book): Promise<Book> {
    return await this.bookService.addBook(book);
  }
}
