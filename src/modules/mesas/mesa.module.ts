import { Module } from "@nestjs/common";
import {
  AtualizaMesaUseCase,
  CreateMesa,
  DeleteMesa,
  ListaMesasUseCase,
} from "./use-case";
import { PrismaModule } from "src/shared/infra/database/prisma.module";

@Module({
  imports: [PrismaModule],
  providers: [CreateMesa, DeleteMesa, AtualizaMesaUseCase, ListaMesasUseCase],
  exports: [CreateMesa, DeleteMesa, AtualizaMesaUseCase, ListaMesasUseCase],
})
export class MesaModule {}
