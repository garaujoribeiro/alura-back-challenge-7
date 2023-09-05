import { Module } from '@nestjs/common';
import { DepoimentosModule } from '../depoimentos/depoimentos.module';
import { DepoimentosHomeService } from './depoimentos-home.service';
import { DepoimentosHomeController } from './depoimentos-home.controller';

@Module({
  imports: [DepoimentosModule],
  exports: [DepoimentosHomeService],
  providers: [DepoimentosHomeService],
  controllers: [DepoimentosHomeController],
})
export class DepoimentosHomeModule {}
