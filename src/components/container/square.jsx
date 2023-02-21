import React, { useState } from 'react';
import '../styles/square.scss'

const SquareComponent = () => {

    const [colour, setColour] = useState('black');
    const [authorization, setAuthorization] = useState(true);

    const colourBackground = () => {
        if(authorization) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
    
            const rgbColor = `rgb(${r},${g},${b})`;
            setColour(rgbColor);
        }
    }

    const setBackChange = () => {
        colourBackground();
        setAuthorization(!authorization);
    }

    return (
        <div style={ {width:'100vw',minHeight: '80vh'} } className='d-flex justify-content-center align-items-center mb-4'>
            <div className='square'>
                <div className='' style={ { backgroundColor:`${colour}`, width:'225px',height: '225px'} }
                    onMouseMove={colourBackground}
                    onBlur={colourBackground}
                    onDoubleClick={setBackChange}>
                </div>
            </div>  
        </div>
    );
}

export default SquareComponent;
