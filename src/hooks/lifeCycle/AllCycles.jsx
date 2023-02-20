import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado');

        const intervaloId = setInterval(() => {
            document.title = `${new Date}`
            console.log('Actualizacion del componente');
        }, 1000);
        
        return () => {
            console.log('Componente va a desaparecer');
            document.title = 'Tiempo detenido';
            clearInterval(intervaloId);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
