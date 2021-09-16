import React from 'react'
import Hijo from './hijo'
import Hijito from './hijito'

function Padre() {

    let regaloDePadre = "Moto"

    return (
        <div>
            <h1 style={{color:"red"}}>Componente padre</h1>
            <Hijo regalo={regaloDePadre} nuevaProp={"Carolina"}/>
            <Hijito obsequio={"dinero"} obsequio2={"cena"}/>
        </div>
    )
}

export default Padre
