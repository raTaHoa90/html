var painting;



class Painting {
    #canvas;
    #ctx;
    #offset = 0;
    #flagReverse = false;
    constructor(canvasElement){
        this.#canvas = canvasElement;
        this.#ctx = canvasElement.getContext('2d');
        canvasElement.width = 500;
        canvasElement.height = 500;
        this.draw();
    }

    draw(){
        this.#ctx.strokeStyle = "black";
        this.#ctx.lineWidth = 5;
        this.#ctx.fillStyle = "red";

        this.#ctx.clearRect(0, 0, this.#canvas.width, this.#canvas.height);

        this.#ctx.beginPath();
            this.#ctx.moveTo(20 + this.#offset,18);
            this.#ctx.lineTo(100 + this.#offset,100);
            this.#ctx.lineTo(20 + this.#offset, 180);
            this.#ctx.lineTo(20 + this.#offset,18);
            this.#ctx.fill();
            this.#ctx.stroke();
            
        if(this.#flagReverse)
            this.#offset--;
        else
            this.#offset++;
        
        if(this.#offset == 0 || this.#offset == 25)
            this.#flagReverse = !this.#flagReverse;

        this.#ctx.closePath();
    }
}

function AnimationFrame(){
    painting.draw();
    window.requestAnimationFrame(AnimationFrame);
}


/*function loadpage(){
    painting = new Painting(document.getElementById('holst'));
    window.requestAnimationFrame(AnimationFrame);
}*/


document.addEventListener('DOMContentLoaded', function(){
    painting = new Painting(document.getElementById('holst'));
    window.requestAnimationFrame(AnimationFrame);
});