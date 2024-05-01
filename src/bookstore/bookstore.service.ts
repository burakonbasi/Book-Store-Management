import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bookstore } from './bookstore.entity';

@Injectable()
export class BookstoreService {
  constructor(
    @InjectRepository(Bookstore)
    private readonly bookstoreRepository: Repository<Bookstore>,
  ) {}

  async findAllBookstores(): Promise<Bookstore[]> {
    return await this.bookstoreRepository.find();
  }

  async findBookstoreById(id: number): Promise<Bookstore | undefined> {
    return await this.bookstoreRepository.findOne({ where: { id } });
  }

  async addBookstore(bookstore: Bookstore): Promise<Bookstore> {
    return await this.bookstoreRepository.save(bookstore);
  }

  async updateBookstore(id: number, bookstore: Bookstore): Promise<Bookstore> {
    const existingBookstore = await this.bookstoreRepository.findOne({ where: { id } });
    if (!existingBookstore) {
      throw new Error('Bookstore not found');
    }
    await this.bookstoreRepository.merge(existingBookstore, bookstore);
    return await this.bookstoreRepository.save(existingBookstore);
  }

  async deleteBookstore(id: number): Promise<void> {
    await this.bookstoreRepository.delete(id);
  }
}
