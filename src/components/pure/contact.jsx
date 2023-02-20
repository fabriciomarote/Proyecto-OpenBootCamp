import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import '../styles/contact.scss'

const ContactComponent = ({ contact, state, remove}) => {

    const contactIconState = () => {
        if(contact.conectado) {
            return (<i onClick={() => state(contact)} className='bi-toggle-on contact-action' style={{color: 'green'}}>Conectado</i>) 
        } else {
            return (<i onClick={() => state(contact)} className='bi-toggle-off contact-action' style={{color: 'grey'}}>Desconectado</i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <td>
                <span className='ms-1 contact'>{contact.nombre}</span>
            </td>
            <td className='align-middle '>
                <span className='contact'>{contact.apellido}</span>
            </td>
            <td className='align-middle'>
                <span contact>{contact.email}</span>
            </td>
            <td className='align-middle'>
                {contactIconState()}
            </td>
            <td className='align-middle'>
                <i className='bi-trash contact-action' style={{color:'tomato'}} onClick={() => remove(contact)}></i>
            </td>
        </tr>
    );
};

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    state: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
};

export default ContactComponent;
