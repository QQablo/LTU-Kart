const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
const session = require("express-session");

const port = process.env.PORT || 3000;

const app = express();
const httpServer = createServer(app);

const sessionMiddleware = session({
  secret: "changeit",
  resave: true,
  saveUninitialized: true,
});

app.use(sessionMiddleware);

app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

app.post("/incr", (req, res) => {
  const session = req.session;
  session.count = (session.count || 0) + 1;
  res.status(200).end("" + session.count);
});

const io = new Server(httpServer);

httpServer.listen(port, () => {
  console.log(`application is running at: http://localhost:${port}`);
});
