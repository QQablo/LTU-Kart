
let multiplayerLobby = [];

function setupSocket(io) {
  io.on("connection", (socket) => {
    console.log(`Player connected: ${socket.id}`);

    socket.on("joinSinglePlayer", () => {
      socket.emit("gameStart");
    });

    socket.on("joinMultiplayer", () => {
      multiplayerLobby.push(socket.id);
      io.emit("lobbyUpdate", multiplayerLobby.length);

      if (multiplayerLobby.length >= 4) {
        io.emit("gameStart");
        multiplayerLobby = []; 
      }
    });

    socket.on("disconnect", () => {
      console.log(`Player disconnected: ${socket.id}`);
      multiplayerLobby = multiplayerLobby.filter(id => id !== socket.id);
      io.emit("lobbyUpdate", multiplayerLobby.length);
    });
  });
}

module.exports = { setupSocket };
