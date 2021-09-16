// const fetch = require('node-fetch');
// import "isomorphic-fetch"

async function traerDatos(valor1,valor2){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${valor1}&offset=${valor2}`);
    let data = await response.json()
    // console.log(data.results)
    const pokemonos = data.results
    const pokeMap = pokemonos.map(num => num.name);
    console.log(pokeMap)
}

// traerDatos(15,15)


async function traerDatosxPeso(valor1,valor2){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${valor1}&offset=${valor2}`);
    let data = await response.json()
    console.log(data)
    // console.log(data.results)
    const pokeMap = data.results.map(num => num.name);
    // const pokeMapPeso = data.results.map(num => num.weight>150);
    console.log(pokeMap)
    // console.log(pokeMapPeso)
    // console.log(pokeMapPeso)
    for(let i=0;i<pokeMap.length;i++){
        // console.log(pokeMap[i])
        traerPokemon(pokeMap[i])
    }
}

traerDatosxPeso(15,1)


async function traerPokemon(poke){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    let data = await response.json()
    // console.log(data)
    if(data.weight > 150){
        console.log(`El peso de ${poke} es ${data.weight}`)
    }
    
    // const pokemonos = data.results
    // console.log(pokemonos)
}

traerPokemon("butterfree")