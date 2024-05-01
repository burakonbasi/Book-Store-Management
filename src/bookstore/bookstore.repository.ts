import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bookstore } from './bookstore.entity';

@Injectable()
export class BookstoreRepository extends Repository<Bookstore> {}
