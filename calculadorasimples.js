let numero1 = 10;
let numero2 = 5;
let operador = "+"; 

let resultado;

if (operador === "+") {
    resultado = numero1 + numero2;
} else if (operador === "-") {
    resultado = numero1 - numero2;
} else if (operador === "*") {
    resultado = numero1 * numero2;
} else if (operador === "/") {
    resultado = numero1 / numero2;
} else {
    console.log("Operador inválido");
}

console.log("Resultado:", resultado);
