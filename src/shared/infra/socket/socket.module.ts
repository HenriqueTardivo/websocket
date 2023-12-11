import { Module } from "@nestjs/common";
import { MesasGateway } from "./mesas.gateway";
import { SocketService } from "./socket.service";

@Module({
  providers: [MesasGateway, SocketService],
  exports: [SocketService],
})
export class SocketModule {}
