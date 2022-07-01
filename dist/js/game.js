"use strict";
let directionYPlayer;
let directionXPlayer;
let playerPositionX = 0;
let playerPositionY = 0;
let playerVelocity = 5;
let gameStart;
let frame = 0;
const player = document.getElementById("space-ship");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
function keyDown() {
    document.addEventListener("keydown", (e) => {
        if (e.key === "w") {
            directionYPlayer = -1;
        }
        if (e.key === "s") {
            directionYPlayer = 1;
        }
        if (e.key === "d") {
            directionXPlayer = 1;
        }
        if (e.key === "a") {
            directionXPlayer = -1;
        }
    });
}
function keyUp() {
    document.addEventListener("keyup", (e) => {
        if (e.key === "w" || e.key === "s") {
            directionYPlayer = 0;
        }
        if (e.key === "d" || e.key === "a") {
            directionXPlayer = 0;
        }
    });
}
function playerControl() {
    playerPositionY += directionYPlayer * playerVelocity;
    playerPositionX += directionXPlayer * playerVelocity;
    player.style.top = playerPositionY + "px";
    player.style.left = playerPositionX + "px";
}
function gameLoop() {
    if (gameStart) {
        playerControl();
    }
    frame = requestAnimationFrame(gameLoop);
}
function startGame() {
    gameStart = true;
    playerPositionX = screenWidth / 2;
    playerPositionY = screenHeight / 2;
    directionXPlayer = directionYPlayer = 0;
    player.style.top = playerPositionY + "px";
    player.style.left = playerPositionX + "px";
    gameLoop();
}
window.addEventListener("load", startGame);
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
