import { Module } from '@nestjs/common';
import { UserService } from './user.service';

@Module({
  providers: [UserService],
  exports: [UserService], // Buraya dikkat, bu servisin diğer modüllerle paylaşılmasını istiyorsanız ekleyin
})
export class UserModule {}
