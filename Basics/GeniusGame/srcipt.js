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

    //
    order[order.length] = handleColorOrder;
    clickedOrder = [];

    for(let i in order){
        // let elementColor
    }
}