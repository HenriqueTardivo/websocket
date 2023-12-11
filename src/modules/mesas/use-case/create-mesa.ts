import { HttpException, Injectable } from "@nestjs/common";
import { MesaRepository } from "../repositories/mesa";

@Injectable()
class CreateMesa {
  constructor(private readonly mesaRepository: MesaRepository) {}

  public async execute(nome: string) {
    try {
      const exists = await this.mesaRepository.list({ nome });

      if (exists.length > 0) {
        throw new HttpException("Já existe uma mesa com esse nome!", 409);
      }

      const mesa = {
        nome,
        criadaEm: new Date(),
      };

      const result = await this.mesaRepository.create(mesa);

      return result;
    } catch (error) {
      console.log(error);
      throw new HttpException("Erro ao criar mesa!", 401);
    }
  }
}

export { CreateMesa };
