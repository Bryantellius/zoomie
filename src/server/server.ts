import * as express from "express";
import * as cors from "cors";
import { Server } from "socket.io";
import * as http from "http";
import apiRouter from "./routes";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket: any) => {
  console.log("socket established");
  socket.on("join-room", (userData: any) => {
    const { roomID, userID } = userData;
    socket.join(roomID);
    socket.to(roomID).broadcast.emit("new-user-connect", userData);
    socket.on("disconnect", () => {
      socket.to(roomID).broadcast.emit("user-disconnected", userID);
    });
    socket.on("broadcast-message", (message: any) => {
      socket
        .to(roomID)
        .broadcast.emit("new-broadcast-messsage", { ...message, userData });
    });
    // socket.on('reconnect-user', () => {
    //     socket.to(roomID).broadcast.emit('new-user-connect', userData);
    // });
    socket.on("display-media", (value: any) => {
      socket.to(roomID).broadcast.emit("display-media", { userID, value });
    });
    socket.on("user-video-off", (value: any) => {
      socket.to(roomID).broadcast.emit("user-video-off", value);
    });
  });
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(apiRouter);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.status(500).json({ name: err.name, msg: err.message });
  }
);

const port = 3000;

app.listen(port, () => console.log(`Server listening on port ${port}`));
