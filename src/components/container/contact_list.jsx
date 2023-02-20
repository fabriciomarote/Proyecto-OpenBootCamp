import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';
import ContactForm from '../pure/forms/contactForm';
import '../styles/contact.scss'

const ContactListComponent = () => {

    const contact1 = new Contact("Fabricio", "Marote", "fabricio@gmail.com", true)
    const contact2 = new Contact("Alejandro", "Britez", "alebritez@gmail.com", false)
    const contact3 = new Contact("Carla", "Lopez", "carlalopez@gmail.com", false)
    const contact4 = new Contact("Marta", "Rodriguez", "marta@gmail.com", true)
    const contact5 = new Contact("Mario", "Ruiz", "marioruiz@gmail.com", false)

    const [contacts, setContacts] = useState([contact1, contact2, contact3, contact4, contact5]);    
     
    const changeStateContact = (contact) => {
       const index = contacts.indexOf(contact);
       const tempContacts = [...contacts];
       tempContacts[index].conectado = !tempContacts[index].conectado;
       setContacts(tempContacts); 
    }

    const deleteContact = (contact) => {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts); 
    }

    const addContact = (contact) => {
        const tempContacts = [...contacts];
        tempContacts.push(contact);
        setContacts(tempContacts); 
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card' styled={ {width: '1000px'} }>
                    <div className='card-header p-1'>
                        <h1>Tus Contactos:</h1>
                    </div>
                    <div className='card-body' data-mdb-perfect-scrollbar='true' styled={ { position: 'relative', width: '800px', height: '600px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Nombre</th>
                                    <th scope='col'>Apellido</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Estado</th>
                                </tr>
                            </thead>
                            <tbody> 
                                { contacts.map((contact, index) => {
                                    return (
                                        <ContactComponent 
                                            key={index} 
                                            contact={contact} 
                                            state={changeStateContact}
                                            remove={deleteContact}>
                                        </ContactComponent>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
};

export default ContactListComponent;
