# LTU-Kart

LTU-Kart is a web-based multiplayer racing game inspired by the Mario Kart series. It enables players to join a race by scanning a QR code, with no need for account registration or game installation. The game is built using Unity as game engine, Node.js for the backend, and WebSocket (Socket.IO) for real-time communication. It aims to provide a good gaming experience for players on mobile devices.

## Features
- Real-time singleplayer support via WebSockets
- QR code-based lobby system for easy player entry
- AI-driven competitors for single-player or small group racing
- Race tracks modeled after parts of the LTU campus
- Power-ups, obstacles, and interactive game elements

## Project Overview
The LTU-Kart game was developed as part of a university project. The system allows players to easily join a race by scanning a QR code, while the backend manages player synchronization, disconnections, and real-time game updates.

## Getting Started

Follow the steps below to set up the LTU-Kart project on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (for backend server)
- [Unity](https://unity.com/) (for the frontend game engine, WebGL version)
- A modern web browser (Chrome, Firefox, Safari)

### Clone the Repository
To get started, clone the repository to your local machine:

```bash
git clone https://github.com/QQablo/LTU-Kart.git
cd LTU-Kart
```

### Install Backend Dependencies
The server runs on **Node.js** with **Socket.IO**. Navigate to the server folder and install dependencies:

```bash
cd server
npm install
```

### Install Frontend Dependencies
The frontend is built with **Vue.js**. Navigate to the frontend folder and install dependencies:

```bash
cd ../frontend
npm install
```

### Start the Backend Server
Run the following command to start the **Node.js** WebSocket server:

```bash
cd ../server
node server.js
```

By default, the server runs on **port 3000**.

### Start the Frontend
Run the following command to start the **Vue.js** frontend:

```bash
cd ../frontend
npm run dev
```

### Start the Unity WebGL Game
- Open the **Unity project** in **Unity Hub**.  
- Build the game for **WebGL**.  
- Serve the WebGL build using a **local or online server**.  

---

## How to Play

1. **Scan the QR Code**  
   - Players scan the **QR code** displayed on the frontend to join the lobby.  

2. **Enter the Lobby**  
   - A single player start a race **alone against AI opponents**.  
 
3. **Start the Race**  
   - The game starts once the player is in the lobby.  
   - Player **race against AI opponents**.  
   - Use **power-ups and missiles** to slow down opponents.  

4. **Win the Race**  
   - The first player to **cross the finish line** wins!  

---

## Extending the Project

This project can be extended in multiple ways:

- **Complete Multiplayer Functionality** – Implement and finalize **real-time multiplayer features** so players can race against each other. 
-  **Improved AI Opponents** – Enhance AI behavior and movement logic.  
-  **Better Disconnection Handling** – Implement smoother reconnection options for players.  
-  **Performance Optimization** – Improve WebGL performance for better frame rates.  

---

## 📎 Links  
-  **Gameplay Video**: https://youtu.be/U2BNmUT11iA?si=JLPkitfazQHCsol_  
