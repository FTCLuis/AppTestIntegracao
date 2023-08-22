// function soma(a,b) {
//     if (!(parseFloat(a) >= 0 || parseFloat(b) >= 0)) {
//         return false;
//     }

//     return a + b;
// }

// function subtracao(a,b) {
//     if (!(parseFloat(a) >= 0 || parseFloat(b) >= 0)) {
//         return false;
//     }

//     return a - b;
// }

// function multiplicacao(a,b) {
//     if (!(parseFloat(a) >= 0 || parseFloat(b) >= 0)) {
//         return false;
//     }

//     return a * b;
// }

// function divisao(a,b) {
//     if (!(parseFloat(a) >= 0 || parseFloat(b) >= 0)) {
//         return false;
//     }

//     return a / b;
// }



const soma = (a,b) => (!parseFloat(a) && parseFloat(a) != 0) || (!parseFloat(b) && parseFloat(b) != 0) ? false : a + b
const subtracao = (a,b) => (!parseFloat(a) && parseFloat(a) != 0) || (!parseFloat(b) && parseFloat(b) != 0) ? false : a - b
const multiplicacao = (a,b) => (!parseFloat(a) && parseFloat(a) != 0) || (!parseFloat(b) && parseFloat(b) != 0)? false : a * b
const divisao = (a,b) => (!parseFloat(a) && parseFloat(a) != 0) || (!parseFloat(b) && parseFloat(b) != 0) ? false : a / b

export { soma, subtracao, multiplicacao, divisao }
