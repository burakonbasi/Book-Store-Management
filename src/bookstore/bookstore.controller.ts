import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BookstoreService } from './bookstore.service';
import { Bookstore } from './bookstore.entity';

@Controller('bookstores')
export class BookstoreController {
  constructor(private readonly bookstoreService: BookstoreService) {}

  @Get()
  async findAllBookstores(): Promise<Bookstore[]> {
    return await this.bookstoreService.findAllBookstores();
  }

  @Get(':id')
  async findBookstoreById(@Param('id') id: number): Promise<Bookstore | undefined> {
    return await this.bookstoreService.findBookstoreById(id);
  }

  @Post()
  async addBookstore(@Body() bookstore: Bookstore): Promise<Bookstore> {
    return await this.bookstoreService.addBookstore(bookstore);
  }
}
