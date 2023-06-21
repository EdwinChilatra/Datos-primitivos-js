/*
Crear el metodo convertirEnCamel, el cual reciba como parametro un string con palabras separadas con guion y devuelva palabras con mayusculas

convertirEnCamel('una-cadena-corta')

=> unaCadenaCorta
*/

/* 
function convertirEnCamel(palabrasSeparadasPorGuion) {
    let palabras = palabrasSeparadasPorGuion.split("-");
    let resultado = "";
    for (let i = 0; i < palabras.length; i++) {
      let palabra = palabras[i];
      if (i !== 0) {
        palabra = palabra.charAt(0).toUpperCase() + palabra.slice(1);
      }
      resultado += palabra;
    }
    return resultado;
  }
  
  let ejemplo = prompt("Ingrese palabras separadas por guiones");
  console.log(convertirEnCamel(ejemplo));
*/

  let numbers = [1, 2, 7, 4, 3, 6, 10, 8, 9, 5];

  function filtrarRango(arreglo, a, b){
    return arreglo.filter(elemento => elemento >= a && elemento <= b);
  }

  console.log(filtrarRango(numbers, 5, 8));
  console.log(numbers)