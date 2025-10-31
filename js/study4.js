'use strict';

var gameBall = {
    timerID: null,
    score: null,
    balls: [],

    StartGame: function (){
        if(!this.score)
            this.score = document.getElementById('result');

        this.score.innerText = 0;
        // Вызвать один раз функцию, через указанное время
        //timerID = setTimeout(TimeNextGame, 100); 
        //clearTimeout(timerID);

        this.balls.forEach(ball => ball.remove());
        this.balls = [];
        document.getElementById('btnStart').disabled = true;

        // запустить таймер который будет вызывать функцию каждый раз, как выйдет время
        this.timerID = setInterval(() => this.TimeNextGame(), 100);  
        //clearInterval(timerID); // остановить таймер
    },

    NewBall: function(){
        let div = document.createElement("DIV");
        div.classList.add('ball');        // добавить новый css-класс
        //div.classList.contains('ball'); // проверить наличие css-класса, если есть вернет True, иначе False
        //div.classList.remove('ball');   // удаление css-класса
        //div.classList.toggle('ball');   // если такой css-класс у элемента есть, то удалить его, иначе добавить
        //div.classList.replace('ball', 'newball'); // заменить первый css-класс вторым

        div.style.backgroundColor = 'rgb(' + Rand(255) + ',' + Rand(255) + ',' + Rand(255) + ')';
        div.style.top = (screen.height - 300) + 'px';
        div.style.left = Rand(50, screen.width - 100) + 'px';

        div.onclick = () => { // так this будет указывать не на DIV, а на gameBall
            let indx = this.balls.indexOf(div);
            this.balls.splice(indx, 1);
            div.remove();
            this.score.innerText = +this.score.innerText + 1;
        };

        this.balls.push(div);
        document.getElementById('game').append(div);
    },

    GameOver: function(){
        clearInterval(this.timerID);
        let save = document.getElementById('save');
        if(+save.innerText < +this.score.innerText)
            save.innerText = this.score.innerText;
        document.getElementById('btnStart').disabled = false;
    },

    TimeNextGame: function(){
        this.balls.forEach(ball => {
            let top = parseInt(ball.style.top);
            if(top > 5)
                ball.style.top = (top - 5) + 'px';
            else
                this.GameOver();
        });

        if(Math.random() > 0.25) // с вероятностью в 25%
            this.NewBall();
    }
}

function Rand(min, max){
    if( max == undefined){
        max = min;
        min = 0;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}