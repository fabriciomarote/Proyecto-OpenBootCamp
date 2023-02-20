import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';
import '../../styles/contact.scss'

const ContactForm = ({add}) => {

    const nombreRef = useRef('');
    const apellidoRef = useRef('');
    const emailRef = useRef('');

    const addTask = (e) => {
        e.preventDefault();
        const newContact = new Contact(
            nombreRef.current.value,
            apellidoRef.current.value,
            emailRef.current.value,
            false,
        );
        add(newContact);
    }

    return (
        <form onSubmit={addTask} className='d-grid justify-content-center align-items-center mb-4 contact-form'>
            <div className='form-outline flex-fill'>
                <input ref={nombreRef} id='inputName' type='text' className='form-control form-control-lg input-contact' placeholder='Nombre' required autoFocus></input>
                <input ref={apellidoRef} id='inputDescription' type='text' className='form-control form-control-lg input-contact' placeholder='Apellido'required autoFocus></input>
                <input ref={emailRef} id='inputDescription' type='text' className='form-control form-control-lg input-contact' placeholder='Email'required autoFocus></input>
            </div>
            <button type='submit' className='btn btn-danger btn-lg ms-2'>Agregar</button>
        </form>
    );
}

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
