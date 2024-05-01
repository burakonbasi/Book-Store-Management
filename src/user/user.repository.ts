import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findById(id: string): Promise<User | undefined> {
    const userId = parseInt(id, 10);
    return await this.userRepository.findOne({ where: { id: userId } });
  }

  async create(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
