<template>
    <div>
      <h1 v-if="!gameStarted">Loading game...</h1>
      <h1 v-else>⏳ Game Starting Now!</h1>
    </div>
  </template>
  
  <script>
  import { inject, onMounted, ref } from "vue";
  
  export default {
    setup() {
      const socket = inject("socket");
      const gameStarted = ref(false);
  
      onMounted(() => {
        socket.emit("joinSinglePlayer");
        socket.on("gameStart", () => {
          gameStarted.value = true;
        });
      });
  
      return { gameStarted };
    },
  };
  </script>
  