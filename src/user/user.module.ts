import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository'; // UserRepository'yi içeriye alın
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // User'ı içeriye alın
  controllers: [UserController],
  providers: [UserService, UserRepository], // UserRepository'yi sağlayıcılar listesine ekleyin
})
export class UserModule {}
