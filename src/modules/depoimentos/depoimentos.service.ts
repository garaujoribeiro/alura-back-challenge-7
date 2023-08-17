import { Injectable } from '@nestjs/common';
import { CreateDepoimentoDto } from './Dto/create.depoimento.dto';
import { DepoimentosRepository } from './depoimentos.repository';

@Injectable()
export class DepoimentosService {
  constructor(private readonly repository: DepoimentosRepository) {}

  async findAll() {
    return await this.repository.findAll();
  }

  async findById(id: string) {
    return await this.repository.findById(id);
  }

  async create({ autor, depoimento, imagem }: CreateDepoimentoDto) {
    return await this.repository.create({ autor, depoimento, imagem });
  }

  async update({
    id,
    body,
  }: {
    id: string;
    body: {
      autor: string;
      depoimento: string;
      imagem: string;
    };
  }) {
    try {
      await this.repository.findById(id);
    } catch (error) {
      throw new Error('Depoimento não encontrado');
    }

    return await this.repository.update({
      id,
      body,
    });
  }

  async delete(id: string) {
    try {
      await this.repository.findById(id);
    } catch (error) {
      throw new Error('Depoimento não encontrado');
    }

    return await this.repository.delete(id);
  }
}
