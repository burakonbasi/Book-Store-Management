// config/database.config.ts

import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres', // Veritabanı türünü belirtin (örneğin: postgres, mysql)
  host: 'localhost', // Veritabanı sunucusunun adresi
  port: 5432, // Veritabanı sunucusunun bağlantı noktası
  username: 'your_username', // Veritabanı kullanıcı adı
  password: 'your_password', // Veritabanı şifresi
  database: 'bookstore', // Veritabanı adı
  entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Entity dosyalarının yolu
  synchronize: true, // Veritabanı şemalarını otomatik olarak senkronize et (Geliştirme ortamında kullanılabilir)
};

export default typeOrmConfig;
