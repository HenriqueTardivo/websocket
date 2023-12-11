import {
  ConnectedSocket,
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway()
export class MesasGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client: any) {
    console.log("Nova conexão");
  }

  handleDisconnect(client: any) {
    console.log("Desconectado");
  }

  @SubscribeMessage("message")
  handleMessage(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket
  ) {
    this.server.emit("message", data);
  }
}
