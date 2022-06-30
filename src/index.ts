

let pixelCounter: number = 0;
let intervalPixel: number = 100;

function createPixels() {

    pixelCounter++;

    //Pegar largura e altura da tela
    const width: number = window.screen.width;
    const height: number = window.screen.height;

    //Sortear uma posição na tela
    const widthSort: number = Math.floor(Math.random() * width);
    const heightSort: number = Math.floor(Math.random() * height);

    //Criar elemento
    const pixel = document.createElement("div");
    pixel.classList.add("pixel");

    pixel.style.position = "absolute";
    pixel.style.left = `${widthSort}`+"px";
    pixel.style.top = `${heightSort}`+"px";

    document.body.appendChild(pixel);

    if(pixelCounter === 150) {
        alert("sasa");
        clearInterval(createPixelsInterval);
    }

}

const createPixelsInterval = setInterval( () => {
    createPixels();
}, intervalPixel)