import { Controller, Get } from '@nestjs/common';
import { DepoimentosHomeService } from './depoimentos-home.service';

@Controller('depoimentos-home')
export class DepoimentosHomeController {
  constructor(
    private readonly depoimentosHomeService: DepoimentosHomeService,
  ) {}
  @Get()
  async getHomeTestimonials() {
    return this.depoimentosHomeService.getHomeTestimonials();
  }
}
