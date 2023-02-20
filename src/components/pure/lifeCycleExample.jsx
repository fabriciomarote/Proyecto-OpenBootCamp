import React, { Component } from 'react';

class LifeCycleExample extends Component {

    componentWillMount() {
        console.log("WillMount: Antes del montaje del componente");
    }

    componentDidMount() {
        console.log("DidMount: Justo al del montaje del componente, antes de renderizarlo");
    }

    componentWillReceiveProps(nextProps) {
        console.log("WillReceiveProps: Si va a recibir nuevas props");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("WILLMOUNT: Antes del montaje del componente");
    } 

    componentWillUpdate(nextProps, nextState) {
        console.log("WillUpdate: Justo antes de actualizarse");
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("DidUpdate: Justo despues de actualizarse");
    }

    componentWillUnmount(nextProps, nextState) {
        console.log("WillUnmount: Justo antes de desaparecer");
    }    




    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
