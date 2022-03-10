let chico = 300 * 1
let bento = 1500 * 1
let bernardo = 600 * 1
let marina = 1000 * 1
let iara = 150 * 1
let marlene = 225;

let pessoas = [chico, bento, bernardo, marina, iara, marlene];

function calcTotal(arr) {
    let qtdTotal = 0
    for (let qtd of arr) {
        qtdTotal += qtd;
        
    }
    return qtdTotal
}


let total = calcTotal(pessoas)
console.log(total)
print(total);