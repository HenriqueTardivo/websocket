import { Transform } from "class-transformer";
import {
  IsDefined,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  MaxLength,
  Min,
  IsDate,
} from "class-validator";

const avaliableColors = ["red", "green", "blue", "black", "white", "pink"];

export class AtualizaMesaDto {
  @IsDefined()
  @IsNumber()
  @IsInt()
  @Min(0)
  id_mesa: number;

  @IsDefined()
  @IsIn(avaliableColors)
  cor: string;

  @IsDefined()
  @IsNotEmpty()
  @MaxLength(180, { message: "Mensagens de até 180 caracteres!" })
  texto: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  atualizadaEm: Date;
}
