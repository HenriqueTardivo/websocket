import { IsDefined, IsString, MaxLength, MinLength } from "class-validator";

export class CreateMesaDto {
  @IsDefined()
  @IsString()
  @MaxLength(20)
  @MinLength(1)
  nome: string;
}
