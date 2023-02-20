import React, { useState, useEffect, useRef } from 'react';

const Example2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    const miRef = useRef();

    const incrementarContador1 = () => {
        setContador1(contador1 +1);
    }

    const incrementarContador2 = () => {
        setContador2(contador2 +1);
    }

    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE');
        console.log('Mostrando Referencia a elemento del DOM');
        console.log(miRef);
    })

    return (
        <div>
            <h1>*** Ejemplo de useState(), useEffect() y useRef() ***</h1>
            <h3>CONTADOR 1: { contador1 }</h3>
            <h3>CONTADOR 2: { contador2 }</h3>
            <h4 ref={miRef}>Ejemplo de elemento referenciado:</h4>

            <button onClick={incrementarContador1}>Incrementar contador</button>
            <button onClick={incrementarContador2}>Actualizar persona</button>
        </div>
    );
}

export default Example2;
