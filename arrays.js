// Ejercicio 1

// Teniendo en cuenta el siguiente array, el objetivo es 
// que puedas mostrar por consola la suma total de las cantidades indicadas.

const price = [100,101,35,20,43,76];

let priceTotal = price.reduce((total, value) => total+value,0)

console.log('El total es $ ',priceTotal);


// Ejercicio 2 

// Teniendo en cuenta el siguiente array, debes mostrar por consola el nombre 
// de cada persona. 
// Para ello tendremos que recorrer persona por persona y obtener sólo el nombre.

const list = [
{name:'Martin',edad:'23'}, {name:'Lucas',edad:'18'}, 
{name:'Egdar',edad:'33'}, {name:'Lucía',edad:'28'}, 
{name:'Florencia',edad:'25'}, {name:'Eugenia',edad:'26'}
]

list.forEach(item => {
    console.log(item.name);
});

// Ejercicio 3
// Usando el mismo array del ejercicio anterior:
// Crear uno nuevo solo con las personas que sean mayores de 25.
// Devolver el nuevo array por consola.

let mayores = list.filter(valor => valor.edad >25)

console.log(mayores)

// Ejercicio 4
// Utilizando el mismo array del ejercicio 2, 
// devolver la primer persona del array que tenga 23 años.

let primerPersona = list.find(valor => valor.edad==23)

console.log(primerPersona);