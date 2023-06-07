let doble = "%&/tyuk";
let simples = '3#5hgyfQ';
let backticks = `rye65+`;

let list_invitados = `Invitados:
* Maria
* Juan
* Pedro
* Miguel
* Diana
`;

// alert(list_invitados)

// Caracteres de Especiales \

/*
\n -> Nueva linea, salto de linea
\t -> Tabulacion
\\ -> Backslash
\' ->, \", \`-> Cada una de las comillas
*/

console.log("Hola\nMundo")
list_invitados = "Invitados: \n* Maria\t* Juan\t* Pedro\t* Miguel\t* Diana";
console.log(list_invitados)

// Logintud de cadenas

console.log("123".length);
console.log("Mi\n".length);

let str = 'Hola';

console.log(str[0]);
console.log(str.charAt(0));
console.log(str[-2]);
console.log(str.at(-2));

// for .. of

for (let char of "Hola"){
    console.log(char);
}

console.log(str.toUpperCase());
console.log(str.toLowerCase());
str = "hola";
console.log(str[0].toUpperCase() + str[1] + str[2] + str[3]);
console.log(str[0].toUpperCase() );