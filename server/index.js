const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const session = require("express-session");
const cors = require("cors");
const { setupSocket } = require("./socket");

const port = process.env.PORT || 3000;

const app = express();
const httpServer = createServer(app);

const sessionMiddleware = session({
  secret: "changeit",
  resave: true,
  saveUninitialized: true,
});

app.use(cors({ origin: "*" }));
app.use(sessionMiddleware);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.post("/incr", (req, res) => {
  const session = req.session;
  session.count = (session.count || 0) + 1;
  res.status(200).end("" + session.count);
});

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

setupSocket(io);

httpServer.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
