// config/database.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost', 
  port: 5432, 
  username: 'your_username',
  password: 'your_password', 
  database: 'bookstore', 
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], 
  synchronize: true, 
};

export default typeOrmConfig;
