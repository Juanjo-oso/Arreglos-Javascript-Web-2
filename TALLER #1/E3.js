//#3
let numeros = [1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 11, 12, 13, 14];

let numerosPares = numeros.filter((numero) => numero % 2 === 0);
console.log(numerosPares);

let multiplique2 = numeros.filter((numero) => numero % 2 === 0).map((numero) => numero * 2);
console.log(multiplique2);