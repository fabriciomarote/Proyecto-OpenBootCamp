import React from 'react';

const Example4 = (props) => {
    return (
        <div>
            <h1>*** Ejemplo de CHILDREN PROPS ***</h1>
            <h2>NOMBRE: { props.nombre }</h2>
            { props.children }
        </div>
    );
}

export default Example4;
