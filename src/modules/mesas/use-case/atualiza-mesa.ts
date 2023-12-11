import { Injectable } from "@nestjs/common";
import { AtualizaMesaRepository } from "../repositories/atualiza-mesa";

@Injectable()
class AtualizaMesaUseCase {
  constructor(private readonly atualizaMesa: AtualizaMesaRepository) {}

  public async execute(atualiza: Omit<AtualizaMesa, "id_atualizacao_mesa">) {}
}

export { AtualizaMesaUseCase };
