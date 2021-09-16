import React from 'react'

function Hijo({regalo, nuevaProp}) {



    return (
        <div>
            <h2 style={{color:"green"}}>Este es el hijo</h2>
            <h2>{regalo} de {nuevaProp}</h2>
        </div>
    )
}

export default Hijo
