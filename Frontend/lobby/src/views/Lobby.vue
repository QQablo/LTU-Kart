<template>
    <div class="lobby-container">
      <h1>Select a Game Mode</h1>
      <button @click="joinSinglePlayer">👤 Single Player (1 vs AI)</button>
      <button @click="joinMultiplayer">👥 Multiplayer (4 Players)</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      joinSinglePlayer() {
        this.$router.push("/singleplayer");
      },
      joinMultiplayer() {
        this.$router.push("/multiplayer");
      },
    },
  };
  </script>
  