"use strict";
let directionYPlayer;
let directionXPlayer;
let playerPositionX = 0;
let playerPositionY = 0;
let toW;
let toS;
let toD;
let toA;
let toSpaceBar;
let playerVelocity = 5;
let keyPress;
let gameStart;
let frame = 0;
const player = document.getElementById("space-ship");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
function keyDown() {
    document.addEventListener("keydown", (e) => {
        toW = e.key === "w" ? directionYPlayer = -1 : false;
        toS = e.key === "s" ? directionYPlayer = 1 : false;
        toD = e.key === "d" ? directionXPlayer = 1 : false;
        toA = e.key === "a" ? directionXPlayer = -1 : false;
        toSpaceBar = e.key === "b" ? shoot() : false;
        keyPress = e.key;
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
function shoot() {
    const shootDiv = document.createElement('div');
    shootDiv.classList.add('shoot');
    document.body.appendChild(shootDiv);
    shootDiv.style.top = player.getBoundingClientRect().top + "px";
    shootDiv.style.left = player.getBoundingClientRect().left + "px";
}
function playerControl() {
    playerPositionY += directionYPlayer * playerVelocity;
    playerPositionX += directionXPlayer * playerVelocity;
    player.style.top = playerPositionY + "px";
    player.style.left = playerPositionX + "px";
    if (player.getBoundingClientRect().top <= 20 && keyPress === "w") {
        playerVelocity = 0;
    }
    else if (player.getBoundingClientRect().bottom > screenHeight - 30 && keyPress === "s") {
        playerVelocity = 0;
    }
    else if (player.getBoundingClientRect().left <= 30 && keyPress === "a") {
        playerVelocity = 0;
    }
    else if (player.getBoundingClientRect().right > screenWidth - 30 && keyPress === "d") {
        playerVelocity = 0;
    }
    else {
        playerVelocity = 5;
    }
}
function gameLoop() {
    playerControl();
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
