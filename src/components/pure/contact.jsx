import React from 'react';

const ContactComponent = ( props ) => {

    const { contact } = props;

    return (
        <div>
            <h2> Nombre: { contact.nombre } </h2>
            <h3> Apellido: { contact.apellido } </h3>
            <h4> Email: { contact.email } </h4>
            <h5> Tu estado es: { contact.conectado ? "EN LINEA" : "NO DISPONIBLE" } </h5>
        </div>
    );
};


export default ContactComponent;
