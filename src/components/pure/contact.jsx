import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact }) => {

    const [conected, setConected] = useState(contact.conectado);

    const changeConected = () => {
        setConected(!conected);
    }

    return (
        <div>
            <h4> Nombre: { contact.nombre } </h4>
            <h4> Apellido: { contact.apellido } </h4>
            <h4> Email: { contact.email } </h4>
            <h4> Tu estado es: { conected ? "EN LINEA" : "NO DISPONIBLE" } </h4>
            <button onClick={changeConected}>Cambiar estado</button>
        </div>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};

export default ContactComponent;
