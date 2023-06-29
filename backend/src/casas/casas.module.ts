import { Module } from '@nestjs/common';
import { CasasService } from './casas.service';
import { CasasController } from './casas.controller';

@Module({
  providers: [CasasService],
  controllers: [CasasController]
})
export class CasasModule {}
