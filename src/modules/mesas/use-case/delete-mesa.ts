import { HttpException, Injectable } from "@nestjs/common";
import { MesaRepository } from "../repositories/mesa";

@Injectable()
class DeleteMesa {
  constructor(private readonly mesaRepository: MesaRepository) {}

  public async execute(id: number) {
    const id_mesa = Number(id);

    const exists = await this.mesaRepository.list({ id_mesa });

    if (exists.length === 0) {
      throw new HttpException("Registro não encontrado!", 404);
    }

    await this.mesaRepository.delete(id_mesa);

    return { message: "Registro removido" };
  }
}

export { DeleteMesa };
