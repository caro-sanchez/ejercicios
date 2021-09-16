
// const fetch = require('node-fetch');

fetch("https://api.mercadolibre.com/sites/MLA/search?q=Motorola")
.then(response => response.json())
.then(data => console.log(data.results))
.then(products => products.map(product => console.log(product.title)))


/*
async function traerDatos(){
    let response = await fetch("https://api.mercadolibre.com/sites/MLA/search?q=Motorola");
    let data = await response.json()
    console.log(data)
}

traerDatos()
*/

/*
new Promise((resolve, reject) => {
    setTimeout(()=> resolve("anda"),1000)
})
.then(data => console.log(data))
.catch(err => console.log(`Estoy en el catch ${err}`))
*/



function cualquiera(a,b, ...datos){
    console.log(a,b,datos)
    console.log(datos)

    let sumatoria = datos.reduce((valorAnterior,valorSiguiente)=>{
        return valorAnterior + valorSiguiente
    }, 0)
    console.log("Esta es la sumatoria: ",sumatoria)
}

cualquiera(1,2,3,4,5,6,7,8,9)

//spread operator
let arra1 = [1,2,3,4,5,6,7,8,9]
let copiaArray1 = [...arra1];

let objeto1 = {name: "Caro"}
let objeto2 = {...objeto1, apellido: "Sanchez"}
objeto1.edad = 32

let arr1= [1,2,3]
let arr2= [4,5,6]
let concatArr = [...arr1, ...arr2]

console.log("Esta es la copia del array1: ",copiaArray1);
console.log("Este es el objeto1: ",objeto1);
console.log("Este es el objeto2: ",objeto2);
console.log("Este es la concatenacion de arrays: ",concatArr);