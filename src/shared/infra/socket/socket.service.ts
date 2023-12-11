import { Injectable } from "@nestjs/common";
import { Socket } from "socket.io";

@Injectable()
export class SocketService {
  private readonly connectedClients: Map<string, Socket> = new Map();

  public handleConnection(socket: Socket): void {
    const clientId = socket.id;
    this.connectedClients.set(clientId, socket);

    socket.on("disconnect", () => {
      this.connectedClients.delete(clientId);
    });
  }

  public sendMessage(message: string) {
    for (const client of this.connectedClients.values()) {
      client.emit(message);
    }
  }
}
