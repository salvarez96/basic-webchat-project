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
    socket.on("message", (ioMessage: IoMessage) => {
      this.io.emit("message", ioMessage);
    });
  }
}