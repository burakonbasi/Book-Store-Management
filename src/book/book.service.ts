import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity'; // Doğru entity dosyasını ekleyin

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async findAllBooks(): Promise<Book[]> {
    return await this.bookRepository.find();
  }

  async findBookById(id: number): Promise<Book | undefined> {
    return await this.bookRepository.findOne({ where: { id } });
  }

  async addBook(book: Book): Promise<Book> {
    return await this.bookRepository.save(book);
  }
}
