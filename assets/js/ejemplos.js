//     indexOf 
// En metodo indexOf se usa para buscar la posicion en la que se encuentra la subcadena, si encuentra la cadena retorna el indice de la primera aparicion de la cadena y si no se encuentra la subcadena retorna -1 

let nombre1 = "Edwin Chilatra";
console.log(nombre1.indexOf("Edwin")); 
console.log(nombre1.indexOf("Urueña"));
console.log("-------------"); 

// -------------------

//lastIndexOf
//El método lastIndexOf en JavaScript se utiliza para buscar la última posición de una subcadena dentro de una cadena. Devuelve el índice de la última aparición de la subcadena, o -1 si no se encuentra.

let nombre2 = "Edwin Chilatra";
console.log(nombre2.lastIndexOf("Chilatra")); 
console.log(nombre2.lastIndexOf("Urueña"));
console.log("-------------");

// -------------------

// Includes
// El método includes en JavaScript se utiliza para determinar si una cadena incluye otra cadena como subcadena. Devuelve un valor booleano true o false según si se encuentra o no la subcadena dentro de la cadena.

let nombre3 = "Edwin Chilatra";
console.log(nombre3.includes("Edwin"));  
console.log(nombre3.includes("Urueña"));
console.log("-------------"); 

// -------------------

// startsWith
// El método startsWith en JavaScript se utiliza para determinar si una cadena comienza con una subcadena especificada. Devuelve un valor booleano true o false según si la cadena comienza con la subcadena especificada.

let nombre4 = "Edwin Chilatra Urueña";
console.log(nombre4.startsWith("Edwin"));
console.log(nombre4.startsWith("Urueña"));
console.log("-------------");

// -------------------

//slice 
// El método slice en JavaScript se utiliza para extraer una sección de una cadena y devolverla como una nueva cadena. 

let nombre5 = "Edwin Chilatra";
console.log(nombre5.slice(0, 5));
console.log(nombre5.slice(6));
console.log(nombre5.slice(1,4));
console.log(nombre5.slice(-8));
console.log("-------------");

// -------------------

//SubString

let nombre6 = "Edwin Chilatra ";
console.log(nombre6.substring(0, 5)); // Salida: "Edwin"
console.log(nombre6.substring(6)); // Salida: "Chilatra"



// Trim
// El método trim en JavaScript se utiliza para eliminar los espacios en blanco al principio y al final de una cadena. 
let nombre7 = "    Edwin Chilatra   ";
console.log(nombre7.trim());
console.log("-------------");

// -------------------

// Repeat  variable.repeat(Cantidad de veces que quiere que se repita)
let nombre8 = "Edwin Chilatra ";
console.log(nombre8.repeat(3));
console.log("-------------");

