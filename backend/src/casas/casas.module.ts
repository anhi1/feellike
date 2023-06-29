import { Module } from '@nestjs/common';
import { CasasService } from './casas.service';
import { CasasController } from './casas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Casa } from './casas.model';

@Module({
  imports: [TypeOrmModule.forFeature([Casa])],
  providers: [CasasService],
  controllers: [CasasController]
})
export class CasasModule {}
