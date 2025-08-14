import { Server } from "http";
import { Socket } from "socket.io";
import { SocketIoServer } from "./SocketIoServer";

interface IoMessage {
  username: string
  message: string
}

export class MessageHandler {
  private io: SocketIoServer['io']

  constructor(io: SocketIoServer['io']) {
    this.io = io;
  }
  public message(socket: Socket) {
    const cookie = socket.handshake.headers.cookie;
    const username = (cookie as string).split("=")[1];

    socket.on("message", (message: string) => {
      this.io.emit("message", { username, message });
    });
  }
}