//////////////////////
//// Arrays - Arreglos
//////////////////////

// Permiten tener informacion ordenada
// 0..n

let arreglo = new Array();
let arr = [];

let fruits = ["Papaya","Piña","Mango","Fresa","Mora","Lulo"];

console.log(fruits[0]);
console.log(fruits[5]);
console.log(fruits[3]);

console.log(fruits);

fruits[0] = "Coco"; 
console.log(fruits);
console.log(fruits[0]);

console.log(fruits.length);
console.log(fruits[fruits.length - 1]);

console.log(fruits.at(-1))



// push, pop, shift, unshift

// push: Inserta un elemento al final del arreglo
// pop: Obtiene el elemento al final del arreglo y lo elimina 

fruits.push("Mangostino");
console.log(fruits);

console.log(fruits.pop());
console.log(fruits);

// shift: Extrae el primer elemento del arreglo
// unshift: Agrega un elemento al comienzo del arreglo

console.log(fruits.shift());
console.log(fruits);

fruits.unshift("Guanabana");
console.log(fruits);


// Crear una funcion de agregue el nombre ingresado por parametro al arreglo names
// Utilizar un prompt que use la funcion para agregar nombres
// Escribir el codigo para insertar la cantidad de nombres que indique el usuario
// Mostrar uno por uno los nombres que hay en el arreglo

/*

let names = [];

function agregarNombre (name) {
    names.push(name);
}

let cantidadNombres = prompt("Ingrese la cantidad de nombres que desea ingresar")

let contador = 1;

while (contador <= cantidadNombres){
        
    let nombre = prompt("Ingrese el nombre que desea ingresar");
    agregarNombre(nombre);
    
    contador ++;   
}

// for..of

for(let nombre of names){
    console.log(nombre);
}
*/

console.log(fruits.length);
// Truncando el arreglo
fruits.length = 4
console.log(fruits.length);
console.log(fruits);

/*
delete fruits[1];
console.log(fruits.length);
console.log(fruits[1]);
console.log(fruits);
*/

// splice

fruits.splice(1, 1); // Desde el indice 1, elimine 1 element
console.log(fruits.length);
console.log(fruits);

arr = ["Yo", "estudio", "JavaScript", "en", "el", "SENA"];
console.log(arr);
arr.splice(1, 2, "voy", "a", "bailar");
console.log(arr);
let datos = arr.splice(1, 3);
console.log(datos);
console.log(arr);
arr.splice(1, 0, "estudio", "JavaScript")
console.log(arr);

// ¿Que hace la funcion slice? De un ejemplo donde use su nombre completo

let miNombre = ["Edwin", "Fernando", "Chilatra", "Urueña"];

// Cree un arreglo con los apellidos, utilizando slice

let = apellidos = miNombre.slice(-3, -2);

console.log(apellidos);
console.log(miNombre)

let nombre = ["Juan","Mateo"];
let apellido = ["Morales","Quintero"]

let nombreCompleto = nombre.concat(apellido, "No", "Existe", "en", "la","vida real");
console.log(nombreCompleto);

// // forEach (item, index, array)

// ["Mateo", "Marcos", "Lucas", "Juan", "Maria", "Magdalena"].forEach ((item, index, array) => {
//     console.info(`${item} tiene el indice ${index} en ${array}`);

// });

// ["Mateo", "Marcos", "Lucas", "Juan", "Maria", "Magdalena"].forEach(alert);

/* indexof | lastIndexOf | includes => ¿Para que sirven? De un ejemplo para cada uno con arreglos que involucren su nombre*/


// let nombre1 =["Edwin", "Fernando", "Chilatra", "Urueña"];
// console.log(nombre1.indexOf("Edwin")); 
// console.log(nombre1.indexOf("Chilatra")); 
// console.log(nombre1.indexOf("Urueña"));
// console.log("-------------"); 


// let nombre2 = ["Edwin", "Fernando", "Chilatra", "Urueña"];
// console.log(nombre2.lastIndexOf("Chilatra")); 
// console.log(nombre2.lastIndexOf("Urueña"));
// console.log("-------------");

// let nombre3 = ["Edwin", "Fernando", "Chilatra", "Urueña"];
// console.log(nombre3.includes("Edwin"));  
// console.log(nombre3.includes("Urueña"));
// console.log("-------------"); 

// find

let users = [
    {id: 1, name: "Mateo"},
    {id: 2, name: "Marcos"},
    {id: 3, name: "Lucas"},
    {id: 4, name: "Juan"},
    {id: 5, name: "Mateo"},
    {id: 6, name: "Maria"},

];

// let result = arr.find(function(intem, index, array) {//Cuerpo});

let user = users.find(item => item.id ==3);

console.log(user);
console.log(user.name);

// findIndex

console.log(users.findIndex(user => user.name == "Maria"));
console.log(users.findIndex(user => user.name == "Pedro"));
console.log(users.findIndex(user => user.name == "Mateo"));

// findLastIndex
console.log(users.findLastIndex(user => user.name == "Mateo"));


// filter
// let result = arr.filter(function(intem, index, array) {//Cuerpo});

let someUsers = users.filter(item => item.name == "Mateo");
console.log(someUsers.length);
console.log(someUsers);

// forEach (item, index, array)

["Mateo", "Marcos", "Lucas", "Juan", "Mateo", "Maria"].forEach ((item) => {
    console.info(`${item}`);

console.log("-------------"); 

});

someUsers.forEach(user => console.log(user.name));

someUsers = users.filter(item => item.id > "Mateo");
someUsers.forEach(user => console.log(user.name));

// ----------------------------
//     Transformar un arrat
// ----------------------------

// map
// let result = arr.map(function(intem, index, array) {//Cuerpo});

let lengths = users.map(item => item.name.length);
console.log(lengths);

let numbers = [8, 4, 15, 1, 7, 0, 2];

console.log(numbers);
let doubles = numbers.map(num => 2 * num);
console.log(numbers);
console.log(doubles);

// sort (fn)

numbers.sort();
console.log(numbers);

function compararNumeros(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
};

numbers.sort(compararNumeros);
console.log(numbers);

// Reverse

numbers.reverse();
console.log(numbers);

// split

let nombres = `Mateo
Marcos
Lucas
Juan
`;

let nombresArr = nombres.split("\n");
console.log(nombresArr);

nombresArr = nombresArr.filter(item => item != "");
console.log(nombresArr);

// Reduce / reduceRight

// let value = arr.reduce(function(acumulador, item, index, arrat){

// }, inicio);

numbers = [23, 5, 17, 38, 24];

let suma = numbers.reduce((total, num) => total + num);
suma = numbers.reduceRight((total, num) => total + num);

console.log(suma);

console.log('---------------------------');

console.log(typeof{});

console.log(typeof[]);

console.log(Array.isArray({})); // false
console.log(Array.isArray([])); // true



















