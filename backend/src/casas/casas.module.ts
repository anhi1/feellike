import { Module } from '@nestjs/common';
import { CasasService } from './casas.service';
import { CasasController } from './casas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Casa } from './casas.model';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  imports: [TypeOrmModule.forFeature([Casa]),
  CategoriesModule,
],
  providers: [CasasService],
  controllers: [CasasController]
})
export class CasasModule {}
