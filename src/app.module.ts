import { Module } from "@nestjs/common";
import { MesasGateway } from "./shared/infra/socket/mesas.gateway";
import { HttpApi } from "./shared/infra/http/httpApi.module";
import { ConfigModule } from "@nestjs/config";
import config from "./shared/config/config";
import { SocketModule } from "./shared/infra/socket/socket.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    HttpApi,
    SocketModule,
  ],
  providers: [],
})
export class AppModule {}
