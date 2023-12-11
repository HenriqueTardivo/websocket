import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { AtualizaMesaPrisma } from "./repositories/atualiza-mes.repository";
import { AtualizaMesaRepository } from "src/modules/mesas/repositories/atualiza-mesa";
import { MesaPrisma } from "./repositories/mesa.repository";
import { MesaRepository } from "src/modules/mesas/repositories/mesa";

@Module({
  providers: [
    PrismaService,
    {
      useClass: AtualizaMesaPrisma,
      provide: AtualizaMesaRepository,
    },
    {
      useClass: MesaPrisma,
      provide: MesaRepository,
    },
  ],
  exports: [AtualizaMesaRepository, MesaRepository],
})
export class PrismaModule {}
