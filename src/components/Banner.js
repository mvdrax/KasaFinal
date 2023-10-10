import React from "react";
import {useLocation} from "react-router-dom";

import Background2 from '../assets/background2.png';
import Background from '../assets/backg1.png';




function Banner() {

    let location = useLocation();


    return ( 
    <div className='kasaBanner'>
        <img src={location.pathname === "/about" ? Background2 : Background } alt='KasaBackg' className='kasa-backg' />
       
        {location.pathname === "/" ? ( 
    <h1 className='bannerTitle'>
    Chez vous, partout et ailleurs
</h1>
        ) : null}

    </div>


    )
}

export default Banner