import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateDepoimentoDto {
  @IsString()
  @IsNotEmpty()
  autor: string;

  @IsString()
  @IsNotEmpty()
  depoimento: string;

  @IsString()
  imagem: string;
}
