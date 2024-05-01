import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './book/book.module';
import { BookstoreModule } from './bookstore/bookstore.module';
import { UserModule } from './user/user.module';
import typeOrmConfig from '../config/database.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    BookModule,
    BookstoreModule,
    UserModule,
  ],
})
export class AppModule {}
