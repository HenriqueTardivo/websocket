import { Module } from "@nestjs/common";
import { MesasGateway } from "./shared/infra/gateway/mesas.gateway";
import { HttpApi } from "./shared/infra/http/httpApi.module";
import { ConfigModule } from "@nestjs/config";
import config from "./shared/config/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
    }),
    HttpApi,
  ],
  providers: [MesasGateway],
})
export class AppModule {}
