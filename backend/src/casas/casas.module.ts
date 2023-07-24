/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CasasService } from './casas.service';
import { CasasController } from './casas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Casa } from './casas.model';
import { CategoriesModule } from 'src/categories/categories.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Casa]),
  CategoriesModule,
  UsersModule
],
  providers: [CasasService],
  controllers: [CasasController]
})
// eslint-disable-next-line prettier/prettier
export class CasasModule {}
