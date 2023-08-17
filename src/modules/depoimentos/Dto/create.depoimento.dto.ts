import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDepoimentoDto {
  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsString()
  @IsNotEmpty()
  depoimento: string;

  @IsString()
  imagem: string;
}
