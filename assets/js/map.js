/**
 * El metodo map crea un nuevo arreglo con los resultados de la llamada a una funcion
 */

let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function (x) {
    return x * 2;
});

console.log(numbers);
console.log(doubles);

// Crear una funcion que reciba un arreglo de número y devuelva un arreglo con las raices cuadradas de los numeros dentro de arreglo

function calcular_raices(arreglo) {
    return arreglo.map(numero => Math.sqrt(numero));
}
  
console.log(calcular_raices(numbers));

// *****************************
// Asignacion destructurante 
// *****************************

let arr = ['Juan', 'Alvarado'];
/*
let nombre = arr[0];
let apellido = arr[1];
console.log(nombre + ' ' + apellido);
*/

let [nombre, apellido] =arr;
console.log(nombre);
console.log(apellido);

arr = ['Juan', 'Alvarado', 'Developer', 'Sena'];

let [name, , cargo] =  arr;

console.log(cargo);

let [, , , empresa] =  arr;
console.log(empresa);

let user = {};

[user.name, user.surname, user.job, user.company];

console.log(user);