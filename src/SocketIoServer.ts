import { Server, Socket } from "socket.io";

export class SocketIoServer {
  private io: Server;

  constructor(httpServer: any) {
    this.io = new Server(httpServer);
  }

  public start() {
    this.io.on("connection", (socket: Socket) => {
      console.log(`user ${socket.id} connected`);

      socket.on("disconnect", () => {
        console.log("user disconnected");
      });
    });
  }
}