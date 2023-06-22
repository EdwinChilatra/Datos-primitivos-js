/**
 * Fechas parte 2
 */

let today = new Date();
console.log(today);

today.setHours(0, 0, 0);
console.log(today);

let aDay = new Date(2013, 1, 31);
console.log(aDay);

aDay.setDate(aDay.getDate() + 2);
console.log(aDay);

aDay.setSeconds(aDay.getSeconds() + 70);
console.log(aDay);

aDay.setDate(0);
console.log(aDay);

/**
 * Crear una funcion flecha que calcule la cantidad de dias que faltan para que se termine el mes dado como parametro una fecha.
 */

let getDaysToEndMonth = (date) => {
    let end = new Date(date);
    end.setMonth(end.getMonth() + 1);
    end.setDate(0);
    return end.getDate() - date.getDate();

};

console.log('Faltan ' + getDaysToEndMonth(new Date()) + ' Dias para que se termine el mes')

// Convertir fecha a números

let date = Date.now();

for (let i = 0; i < 100000000; i++) {
    let algo = i * i * i;
}

let end = new Date();

console.log(`EL tiempo Transcurrido es de ${end - date}ms`); // Mlisegundos

/**
 * Crear un funcion flecha llamada getDateAgo que reciba una fecha y una cantidad de dias y devuelva el dia del mes que corresponda, contando la cantidad de dias respecto a la fecha pasada.
 * 
 * Ejemplo: hoy es 21, si ingresamos la fecha actual junto con 1, el resultado debe ser 20
 * Ejemplo: hoy es 21, si ingresamos la fecha actual junto con 5, el resultado debe ser 16
 */

let getDateAgo = (fecha, dias) => {
    let nuevaFecha = new Date(fecha);
    nuevaFecha.setDate(nuevaFecha.getDate() - dias);
    return nuevaFecha.getDate();
  }
  
  let fecha  = new Date();
  console.log(getDateAgo(fecha , 1)); 
  console.log(getDateAgo(fecha , 5)); 

/**
 * Crear una funcion que indique la cantidad de segundos transcurridos el dia de hoy
 */

function segundosTranscurridosHoy() {
  let actual = new Date();
  let horas = actual.getHours();
  let minutos = actual.getMinutes();
  let segundos = actual.getSeconds();
  let segundosTotales = horas * 3600 + minutos * 60 + segundos;
  return segundosTotales; 
}
 
let segundos = segundosTranscurridosHoy();
console.log("Los segundos transcurridos hoy son: " + segundos);

/**
 *  Crear una funcion que indique la cantidad de segundos que faltan para mañana 
*/

function segundosParaMañana() {
  let actual = new Date();
  let horas = actual.getHours();
  let minutos = actual.getMinutes();
  let segundos = actual.getSeconds();
  let segundosTotales = horas * 3600 + minutos * 60 + segundos;
  let segundosHastaMedianoche = 24 * 3600 - segundosTotales;
  return segundosHastaMedianoche;
}
 
let segundosParaSerMañana = segundosParaMañana();
console.log("Los segundos que faltan para mañana son: " + segundosParaSerMañana);
