import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookstore } from './bookstore.entity';
import { BookstoreService } from './bookstore.service';
import { BookstoreController } from './bookstore.controller';
import { BookstoreRepository } from './bookstore.repository'; // Import the repository

@Module({
  imports: [
    TypeOrmModule.forFeature([Bookstore]), // Import the entity
    TypeOrmModule.forFeature([BookstoreRepository]), // Import the repository
  ],
  controllers: [BookstoreController],
  providers: [BookstoreService, BookstoreRepository], // Include the repository in providers
  exports: [BookstoreRepository], // Export the repository
})
export class BookstoreModule {}
