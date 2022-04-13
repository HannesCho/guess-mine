import { join } from "path";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Server } from "socket.io";
import logger from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () =>
  console.log(`✅ Server running: http://localhost:${PORT}`);

const server = app.listen(PORT, handleListening);

const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("helloGuys", () => console.log("the client said hello"));
});
