<template>
    <div class="lobby-container">
      <h1>Waiting for players... ({{ playerCount }}/4)</h1>
      <div v-if="!gameStarted" class="loader"></div>
      <h1 v-if="gameStarted">🏁 Game Starting Now!</h1>
    </div>
  </template>
  
  <script>
  import { inject, onMounted, ref } from "vue";
  
  export default {
    setup() {
      const socket = inject("socket");
      const playerCount = ref(0);
      const gameStarted = ref(false);
  
      onMounted(() => {
        socket.emit("joinMultiplayer");
        
        socket.on("lobbyUpdate", (count) => {
          playerCount.value = count;
        });
  
        socket.on("gameStart", () => {
          gameStarted.value = true;
        });
      });
  
      return { playerCount, gameStarted };
    },
  };
  </script>
  