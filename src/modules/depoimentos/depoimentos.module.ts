import { Module } from '@nestjs/common';
import { DbModule } from '../db/db.module';
import { DepoimentosController } from './depoimentos.controller';
import { DepoimentosService } from './depoimentos.service';
import { DepoimentosRepository } from './depoimentos.repository';

@Module({
  imports: [DbModule],
  controllers: [DepoimentosController],
  providers: [DepoimentosService, DepoimentosRepository],
  exports: [DepoimentosService],
})
export class DepoimentosModule {}
