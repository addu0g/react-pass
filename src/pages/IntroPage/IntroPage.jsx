import React,        
    {   useRef, 
        useEffect, 
        useState} from 'react';
import PropTypes from 'prop-types'
// import vanta
import Cells from 'vanta/dist/vanta.cells.min';
import * as THREE from 'three';

import './IntroPage.css';

const IntroPage  = ({children}) => {
    const reference = useRef(null);
    const [vanta, setVanta] = useState(0);

    useEffect(()=>{
        if(!vanta){
            setVanta(
                Cells({
                    THREE,
                    el: reference.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    color1: 0x0,
                    color2: 0x7a9317,
                    size: 3.80
                })
            );
        }
        return ()=>{
            if(vanta)
            {
                vanta.destroy();
            }
        }
    }, [vanta]);
    
    return (
        <div ref={reference} className='full'>
            {children}
        </div>
    )
}

IntroPage.propTypes = {
    children: PropTypes.node,
}

export default IntroPage

