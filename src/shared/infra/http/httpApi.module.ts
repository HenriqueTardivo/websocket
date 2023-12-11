import { Module } from "@nestjs/common";
import { MesaModule } from "src/modules/mesas/mesa.module";
import { MesasController } from "./mesas.controller";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [MesaModule, ConfigModule],
  controllers: [MesasController],
})
export class HttpApi {}
