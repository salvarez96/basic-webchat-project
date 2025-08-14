import { Server, Socket } from "socket.io";

export class SocketIoServer {
  public io: Server;

  constructor(httpServer: any) {
    this.io = new Server(httpServer);
  }

  public start(callback: (socket: Socket) => void) {
    this.io.on("connection", (socket: Socket) => {
      console.log(`user ${socket.id} connected`);

      callback(socket);

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }
}