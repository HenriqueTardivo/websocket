import { AtualizaMesaRepository } from "src/modules/mesas/repositories/atualiza-mesa";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AtualizaMesaPrisma implements AtualizaMesaRepository {
  constructor(private prisma: PrismaService) {}

  public async atualiza(
    atualizacao: Omit<AtualizaMesa, "id_atualizacao_mesa">
  ): Promise<AtualizaMesa> {
    try {
      const atualiza = await this.prisma.atualizacaoMesa.create({
        data: atualizacao,
      });

      return atualiza;
    } catch (error) {
      throw error;
    }
  }
}
