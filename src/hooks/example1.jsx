import React, { useState } from "react";

const Example1 = () => {

    const valorInicial = 0;

    const personaInicial = {
        nombre: 'fabricio',
        email: 'fabricio@gmail.com'
    }

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    const incrementarContador = () => {
        setContador(contador+1);
    }

    const actualizarPersona = () => {
        setPersona(
            {
                nombre: 'pepe',
                email: 'pepe@gmail.com'
            }
        );
    }
    
    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h3>CONTADOR: { contador }</h3>
            <h3>DATOS DE LA PERSONA:</h3>
            <h3>NOMBRE: { persona.nombre }</h3>
            <h3>EMAIL: { persona.email }</h3>

            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    )

}

export default Example1;