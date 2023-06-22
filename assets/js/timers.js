/** 
 * Planificacion de ejcucion de instrucciones
 */

// setTimeout

/** 
 * setTimeout (func | codigo, [delay], [arg1])
 */

let saludar = (nombre) => {
    alert('Hola' + nombre);
}

// setTimeout(saludar,3000);

/*
setTimeout(() => {
    alert('Hola mundo a los 5 segundos')
}, 5000);
setTimeout(() => {
    alert('Hola mundo a los 3 segundos')
}, 3000);
setTimeout(() => {
    alert('Hola mundo al segundo')
}, 1000);

let id = setTimeout(saludar,3000, ' Fulanito');

console.log(id);


//Cancelar la ejecucion de un temporizador clearTimeout

clearTimeout(id);
console.log(id);
*/

/**
 * Ejecutar codigo periodicamente setInterval
 */

/*
let intervalId = setInterval(() => {
    alert('Tick Tock')
}, 2000);

setTimeout(()=> {
    clearInterval(intervalId);
    alert('Ejecucion Cancelada');
}, 5000);
*/

/**
 * TODO: Crear una funcion que cada segundo por 10 segundos, muestre en consola un numero aleatorio entre 1 y 100.

 */

/*
function numeroRamdom() {
    let tiempo = setInterval(() => {
    numeroAleatorio = Math.floor(Math.random() * 99 + 1);
    console.log(numeroAleatorio);
    }, 1000);

    setTimeout(() => {
    clearInterval(tiempo);
    }, 11000);
    };
numeroRamdom();
*/

/**
 * Recibir del usuario un tiempo en minutos y realizar una cuenta regresiva en consola (en segundos).
 * Al terminar el temporizador, mostrar una alerta indicando se agoto el tiempo.
 */

function temporizador (){
    let minutes = parseInt(prompt("Ingresa el tiempo en minutos:"));
    
    let seconds = minutes * 60;
    
    let  timer = setInterval(() => {
        console.log("Tiempo restante: " + seconds + " segundos");
        seconds--;
      
        if (seconds < 0) {
        clearInterval(timer);
        alert("¡Se agotó el tiempo!");
        }
    
    }, 1000);
}
temporizador ();

  