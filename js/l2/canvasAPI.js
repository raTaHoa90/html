var painting;


class Painting {
    #ctx;
    constructor(canvasElement){
        this.#ctx = canvasElement.getContext('2d');
        canvasElement.width = 500;
        canvasElement.height = 500;
        this.draw();
    }

    draw(){
        this.#ctx.strokeStyle = "black";
        this.#ctx.lineWidth = 5;
        this.#ctx.fillStyle = "red";

        this.#ctx.beginPath();
            this.#ctx.moveTo(20,18);
            this.#ctx.lineTo(100,100);
            this.#ctx.lineTo(20, 180);
            this.#ctx.lineTo(20,18);
            this.#ctx.fill();
            this.#ctx.stroke();
            
        this.#ctx.closePath();
    }
}

function loadpage(){
    painting = new Painting(document.getElementById('holst'));
}