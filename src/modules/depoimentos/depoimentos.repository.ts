import { Injectable } from '@nestjs/common';
import { PrismaService } from '../db/prisma.service';

@Injectable()
export class DepoimentosRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.depoimento.findMany();
  }

  async findById(id: string) {
    return await this.prisma.depoimento.findUniqueOrThrow({
      where: { id },
    });
  }

  async create({
    autor,
    depoimento,
    imagem,
  }: {
    autor: string;
    depoimento: string;
    imagem: string;
  }) {
    return await this.prisma.depoimento.create({
      data: {
        autor,
        depoimento,
        imagem,
      },
    });
  }

  async update({
    id,
    body: { autor, depoimento, imagem },
  }: {
    id: string;
    body: {
      autor: string;
      depoimento: string;
      imagem: string;
    };
  }) {
    return await this.prisma.depoimento.update({
      where: { id },
      data: {
        autor,
        depoimento,
        imagem,
      },
    });
  }

  async delete(id: string) {
    return await this.prisma.depoimento.delete({ where: { id } });
  }
}
