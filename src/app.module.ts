import { Module } from '@nestjs/common';
import { DepoimentosModule } from './modules/depoimentos/depoimentos.module';
@Module({
  imports: [DepoimentosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
