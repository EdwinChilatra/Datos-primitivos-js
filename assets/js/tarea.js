

let string = prompt("Ingrese una palabra")
console.log(string[0].toUpperCase() + string.slice(1).toLowerCase ());

// function buscarSpam(cadena) {
//     let expresion = /(viagra|xxx)/i; // 'i' indica que no se distingue entre mayúsculas y minúsculas
//     return expresion.test(cadena);
//   }
// 	let ejemplo1 = prompt("Ingrese la frase");
// 	console.log(buscarSpam(ejemplo1));