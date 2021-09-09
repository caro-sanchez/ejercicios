/*
Ejercicio 1
Crear una función constructora la cual vamos a llamar Computadora, deberá tener las siguientes propiedades:
    ram:string
    cpu:string
    disco:string
    monitor:string
    disco:string
    gpu:booleano
*/

function Computadora (ram,cpu,disco,monitor,gpu) {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
}


/*
Ejercicio 2 
Crear 5 computadoras distintas y guardarlas (Array) de manera que luego podamos consultar cuántas 
computadoras tenemos y poder mostrarlas por consola. Además queremos ver el detalle de cada computadora por consola.
*/
let compus = [];

compus.push(new Computadora("ram1","cpu1","disco1","monitor1",false))
compus.push(new Computadora("ram2","cpu2","disco2","monitor2",true))
compus.push(new Computadora("ram3","cpu3","disco3","monitor3",false))
compus.push(new Computadora("ram4","cpu4","disco4","monitor4",true))
compus.push(new Computadora("ram5","cpu5","disco5","monitor5",true))
// let compu2 = new Computadora("ram2","cpu2","disco2","monitor2",false);

compus.forEach(item => {
    console.log(item);
});

/*
Ejercicio 3
Crear un nuevo Array a partir del primero, donde vamos a guardar solamente las computadoras con gpu.
*/
let compusTrue = compus.filter(item => item.gpu);
console.log(compusTrue);




/*
Ejercicio 4
Crear una función que calcule cuántos litros de nafta gasta un auto que consume 2 litros cada 100km, 
ingresando por parámetro la cantidad de kilómetros del recorrido a realizar. Luego crear una función que, 
a partir de ese dato, devuelva cuánto significa eso en pesos ingresando por parámetro el precio del litro de nafta.
*/


function litrosNafta(km){
    let cantidadKM = km/100
    let litros=cantidadKM*2

    return litros
}

// console.log(litrosNafta(300));

function precioNafta(precio, litros){
    return precio * litros
}

// precioNafta(2000,litrosNafta(300))
let Nafta = precioNafta(2000,litrosNafta(300));

console.log(Nafta);

