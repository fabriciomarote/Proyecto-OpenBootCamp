import React, { useState } from "react";

const Greetingf = (props) => {

    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge(age +1)
    }

        return (
            <div>
                <h1>Hola { props.name } </h1>
                
                <h2> Tu edad es de: { age }</h2>
                 
                <div>
                    <button onClick={birthday}>Cumplir años</button>
                </div>
                
            </div>
        );
}

export default Greetingf;
