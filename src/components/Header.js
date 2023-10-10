import React from "react";

import logoKasa from "../assets/logoKasa.png" ;
import { NavLink } from "react-router-dom";

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto:ital,wght@0,100;0,300;0,400;0,700;1,400&family=Work+Sans&display=swap');
</style>

function Header() {
    return ( 
    <div className='kasaHeader'> 
    <img src={logoKasa} alt='Kasa' className='kasa-logo' />
    <ul className="navbar1">
    <li className="navbar1li"><NavLink to="/">Accueil</NavLink></li>
    <li className="navbar1li"><NavLink to="/about">A propos</NavLink></li>
</ul>
    </div> 
    );
};

export default Header;