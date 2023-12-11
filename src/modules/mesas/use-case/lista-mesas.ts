import { Injectable } from "@nestjs/common";
import { MesaRepository } from "../repositories/mesa";

@Injectable()
class ListaMesasUseCase {
  constructor(private readonly mesaRepository: MesaRepository) {}

  public async execute() {
    const mesas = await this.mesaRepository.list();

    return mesas;
  }
}

export { ListaMesasUseCase };
