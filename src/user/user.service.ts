import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // UserRepository yerine User kullanıldı
  ) {}

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findUserById(id: string): Promise<User | undefined> {
    const parsedId = parseInt(id, 10);
    return await this.userRepository.findOne({ where: { id: parsedId } });
  }

  async addUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
