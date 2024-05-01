import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity'; // User modelini ekliyoruz

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers(): Promise<User[]> {
    return await this.userService.findAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id') id: string): Promise<User | undefined> {
    return await this.userService.findUserById(id);
  }

  @Post()
  async addUser(@Body() user: User): Promise<User> {
    return await this.userService.addUser(user);
  }
}
