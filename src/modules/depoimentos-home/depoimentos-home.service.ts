import { Injectable } from '@nestjs/common';
import { DepoimentosService } from '../depoimentos/depoimentos.service';
import randomIndex from 'src/utils/functions/randomIndex';

@Injectable()
export class DepoimentosHomeService {
  private readonly NUMBER_OF_TESTIMONIALS_TO_SHOW = 3;

  constructor(private readonly depoimentosService: DepoimentosService) {}

  private pickTestimonials(testimonials: unknown[]) {
    const testimonialsPickedIndexes = [];

    while (
      testimonialsPickedIndexes.length < this.NUMBER_OF_TESTIMONIALS_TO_SHOW
    ) {
      const index = randomIndex(testimonials);
      if (!testimonialsPickedIndexes.includes(randomIndex)) {
        testimonialsPickedIndexes.push(index);
      }
    }

    return testimonialsPickedIndexes.map(
      (testimonialPickedIndex) => testimonials[testimonialPickedIndex],
    );
  }

  async getHomeTestimonials() {
    const allTestimonials = await this.depoimentosService.findAll();
    return this.pickTestimonials(allTestimonials);
  }
}
