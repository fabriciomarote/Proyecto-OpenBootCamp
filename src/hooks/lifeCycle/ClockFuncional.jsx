import React, { useState, useEffect } from 'react';

const ClockFuncional = () => {
    
    const [data, setData] = useState(
        {
        nombre: 'Martín',
        apellidos: 'San José',
        fecha: new Date(),
        edad: 0,
        }
    );

    useEffect(() => {
        const tick = () => {
            setData((prevState) => {
               let edad = prevState.edad +1;
               return {
                  ...prevState,
                  fecha: new Date(),
                  edad
               }
            });
        }
        const timerID = setInterval (
            () => tick(), 1000
        );
        return () => {
        clearInterval (timerID);
        }
    }, []);

    return (
        <div>
            <h2>Hora Actual: {data.fecha.toLocaleTimeString()}</h2>
            <h3>{data.nombre} {data.apellidos}</h3>
            <h1>Edad: {data.edad}</h1>
        </div>
    );
}

export default ClockFuncional;
