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


let [nombre, apellido] =arr;
console.log(nombre);
console.log(apellido);

arr = ['Juan', 'Alvarado', 'Developer', 'Sena'];

let [name, , cargo] =  arr;

console.log(cargo);

let [, , , empresa] =  arr;
console.log(empresa);

let user = {};

[user.name, user.surname, user.job, user.company] = arr;

console.log(user);

let [name1, name2, ... rest] = ['Mateo', 'Marcos', 'Lucas', 'Juan' ] ;
console.log(name1);
console.log(name2);

// ¿y el resto?
console.log(rest.length);

let [name3 = 'Gest', lastname = 'Anonymous'] = ['Maria'];
console.log(name3);
console.log(lastname);

// Desestructuracion de Objetos

let options = {
    title: 'Menu',
    width: 300,
    height: 500,
};

/*
let {height: h, width: w, title} = options;
console.log(title);
console.log(w);
console.log(h);
console.log(options);

let opt = {
    title2: 'Menu',
};

let {height = 100, width = 200, title2} = opt;
console.log(width);
console.log(height);
console.log(title2);

let {title} = options;
console.log(title);
*/
let options = {
    title: 'Menu',
    width: 300,
    height: 500,
};
let {title, ...rest} = options;

console.log(rest.width);

/**
 * TODO:
 * Cree un objeto llamado user con las propiedades name, years, y van a obtener los valores en variables separadas incluyeno la variable isAdmin, que si no se encuentra en el objeto el valor por defecto es false.
 */

let user = {
    name: "Carlos",
    years: 34,
  };
  
let {name, years, isAdmin = false } = user;
  
console.log(name);
console.log(years);
console.log(isAdmin);