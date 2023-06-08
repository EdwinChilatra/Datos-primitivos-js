/*
Crear el metodo convertirEnCamel, el cual reciba como parametro un string con palabras separadas con guion y devuelva palabras con mayusculas

convertirEnCamel('una-cadena-corta')

=> unaCadenaCorta
*/

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