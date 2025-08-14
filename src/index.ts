import express from "express";
import { createServer } from "http";
import path from "path";
import { SocketIoServer } from "./SocketIoServer";
import router from "./routes/index";
import cookieParser from "cookie-parser";
import { MessageHandler } from "./MessageHandler";

const app = express();
const httpServer = createServer(app);
const io = new SocketIoServer(httpServer);

app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(router);

httpServer.listen(app.get("port"), () => {
  console.log(`Server on http://localhost:${app.get("port")}`);
});

io.start((socket) => {
  const messageHandler = new MessageHandler(io.io);
  messageHandler.message(socket);
});