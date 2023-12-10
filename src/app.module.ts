import { Module } from "@nestjs/common";
import { MesasGateway } from './infra/gateway/mesas.gateway';

@Module({
  imports: [],
  providers: [MesasGateway],
})
export class AppModule {}
