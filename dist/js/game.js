"use strict";
let moveDistance = 0;
window.onload = () => {
    let changeShipImg = document.getElementById("space-ship");
    document.addEventListener("keydown", (e) => {
        if (e.key === "w") {
            moveDistance += 10;
            changeShipImg.style.bottom = moveDistance + "px";
        }
    });
};
