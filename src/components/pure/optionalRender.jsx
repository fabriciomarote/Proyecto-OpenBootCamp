import React, { useState } from 'react';

const loggedStyle = {
    backgroundColor: 'green',
    color: "white",
    fontWeight: 'bold'
};

const unloggedStyle = {
    backgroundColor: "tomato",
    color: "white",
    fontWeight: 'bold'
};

const LoginButton = ({loginAction , propStyle}) => {
    return (
        <button style={propStyle} onClick={loginAction}>Login</button>
    );
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return (
        <button style={propStyle} onClick={logoutAction}>Logout</button>
    );
}

const OptionalRender = () => {

    const [access, setAccess] = useState(false);
    const [nMessages, setNMessages] = useState(0);

    /*const updateAccess = () => {
        setAccess(!access);
    }*/

    const loginAction = () => {
        setAccess(true);
    }  

    const logoutAction = () => {
        setAccess(false);
    }  

    let optionalButton;

    if(access) {
            optionalButton = <LogoutButton propStyle={unloggedStyle} logoutAction={logoutAction}></LogoutButton>
    } else {
            optionalButton = <LoginButton propStyle={loggedStyle} loginAction={loginAction}></LoginButton>
    }

    let addMessages = () => {
        setNMessages(nMessages +1);
    }

    return (
        <div>
            {optionalButton}
            { access ? (
                <div>
                    { nMessages > 0 ?
                    <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p> 
                    :
                    <p>There are no new messages</p>
                    }
                    <button onClick={addMessages}>{nMessages === 0 ? 'Add your firt message' : 'Add New Message'}</button>
                </div> ) : null
            }
        </div>
    );
}

export default OptionalRender;
