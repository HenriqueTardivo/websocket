import { MesaRepository } from "src/modules/mesas/repositories/mesa";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MesaPrisma implements MesaRepository {
  constructor(private prisma: PrismaService) {}

  public async create(mesa: Omit<Mesa, "id_mesa">): Promise<Mesa> {
    try {
      const result = await this.prisma.mesa.create({ data: mesa });

      return result;
    } catch (error) {
      throw error;
    }
  }
  public async delete(id: number): Promise<boolean> {
    try {
      await this.prisma.mesa.delete({
        where: {
          id_mesa: id,
        },
      });

      return true;
    } catch (error) {
      throw error;
    }
  }
  public async list(query: Partial<Mesa>): Promise<Mesa[]> {
    try {
      const mesas = await this.prisma.mesa.findMany({
        where: query,
      });

      return mesas;
    } catch (error) {
      throw error;
    }
  }
}
