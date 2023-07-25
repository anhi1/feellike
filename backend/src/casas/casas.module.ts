/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CasasService } from './casas.service';
import { CasasController } from './casas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Casa } from './casas.model';
import { CategoriesModule } from 'src/categories/categories.module';
import { UsersModule } from 'src/users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { v4 as uuidv4 } from 'uuid';


@Module({
  imports: [
  MulterModule.register({
      storage: diskStorage({
        // carpeta destino donde se guardarán los archivos interceptados en los controladores
        destination: './uploads',
        // definir cómo se genera el nombre del archivo antes de guardarlo en la carpeta uploads
        filename: (req, file, callback) => {
          let fileName = uuidv4() + extname(file.originalname);
          callback(null, fileName);
        }
    })
  }),
  TypeOrmModule.forFeature([Casa]),
  CategoriesModule,
  UsersModule
],
  providers: [CasasService],
  controllers: [CasasController]
})
// eslint-disable-next-line prettier/prettier
export class CasasModule {}
