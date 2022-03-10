let order = [];
let clickedOrder = [];
let score = 0;


//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

let sortOrder = () => {
    let handleColorOrder = Math.floor(Math.random() * 4);


    order[order.length] = handleColorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(colorElement[i])
        lightColor(elementColor, Number(i + 1));
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected')
    }, tempo - 250)
}

let offColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.remove('selected')
    }, tempo)
}


let checkOrder = () => {
    for (let i in clickedOrder) {
        if (clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}`)
        nextLevel();
    }
}

let handleClick = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).remove('selected')
        checkOrder()
    })


}

let createColorElement = (color) => {
    if (color == 0) {
        return green
    }
    else if (color == 1) {
        return red
    }
    else if (color == 2) {
        return yellow
    }
    else {
        return blue
    }
}

let nextLevel = () => {
    score++;
    sortOrder();
}


let gameOver = () => {
    alert(`Pontuação ${score} \n Você perdeu o jogo. Clique em OK para iniciar um novo jogo`)
    order = [];
    clickedOrder = [];

    playGame();
}


let playGame = () => {
    score = []
    alert(`Bem vindo ao Genius. Novo jogo iniciado`);
    nextLevel();
}

green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));

playGame();