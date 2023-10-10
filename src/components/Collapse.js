import React, { useState } from 'react';

import arrowUp from '../assets/c-up.png' ; 
import arrowDown from '../assets/c-down.png' ; 

function Collapse( {content, title }  ) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    
    <div className='btnContainer'>
      <button className='btnCollapse' onClick={toggleMenu}>
      <label className="collapseTitle">{title}</label>

      <img
            className="collapseArrow"
            src={isMenuOpen ? arrowUp : arrowDown}
            alt="Arrow" />

      </button>
      
      <div className={`collapseContent ${isMenuOpen ? 'open' : '' }`}><br></br><br></br>{content}</div> 

    </div>
    
  );
}

export default Collapse;
