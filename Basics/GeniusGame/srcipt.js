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
    let hadnleColorOrder = Math.floor(Math.random() * 4);
    order[order.length] = hadnleColorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
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
        createColorElement(color).classList.remove('selected')
        checkOrder()
    }, 250)


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
    else if (color == 3) {
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

green.onclick = () => handleClick(0);
red.onclick = () => handleClick(1);
yellow.onclick = () => handleClick(2);
blue.onclick = () => handleClick(3);

playGame();