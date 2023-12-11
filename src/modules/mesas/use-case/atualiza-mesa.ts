import { HttpException, Injectable } from "@nestjs/common";
import { AtualizaMesaRepository } from "../repositories/atualiza-mesa";
import { MesaRepository } from "../repositories/mesa";
import { SocketService } from "src/shared/infra/socket/socket.service";

@Injectable()
class AtualizaMesaUseCase {
  constructor(
    private readonly atualizaMesa: AtualizaMesaRepository,
    private readonly mesaRepository: MesaRepository,
    private readonly socketService: SocketService
  ) {}

  public async execute(
    atualiza: Omit<AtualizaMesa, "id_atualizacao_mesa" | "atualizadaEm">
  ) {
    try {
      const mesa = await this.mesaRepository.list({
        id_mesa: Number(atualiza.id_mesa),
      });

      if (mesa.length === 0) {
        throw new HttpException("Mesa não encontrada!", 404);
      }

      const atualizaMesa = {
        ...atualiza,
        atualizadaEm: new Date(),
      };

      const result = await this.atualizaMesa.atualiza(atualizaMesa);

      this.socketService.sendMessage(JSON.stringify(result));

      return result;
    } catch (error) {
      throw new HttpException("Erro ao atualizar mesa!", 401);
    }
  }
}

export { AtualizaMesaUseCase };
