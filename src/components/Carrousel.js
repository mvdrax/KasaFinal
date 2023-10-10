import React, { useState } from 'react';

import arrowLeft from '../assets/arrow_left.png' ; 
import arrowRight from '../assets/arrow_right.png' ; 



const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImg = pictures.length;

  const rightDirection = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const leftDirection = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const showingBtn = totalImg > 1;

  return (
    <div className='carouselBox'> 
    <div className="carousel">
        <button className='btnLeftArrow' onClick={leftDirection}>
        {showingBtn && (
        <img src={arrowLeft} alt='Left Arrow' className='arrowLeft' />
        )}
        </button>

      <img className="carrouselImages" src={pictures[currentIndex]} alt={pictures[currentIndex].titre} />
      
        <button className='btnRightArrow' onClick={rightDirection}>
        {showingBtn && (
        <img src={arrowRight} alt='Right Arrow' className='arrowRight' />
        )}
        </button>

         

    </div>
    {showingBtn && (
<div className="containerCounter">
        <p className="counter">
          {pictures.length > 1 ? `${currentIndex + 1}/${pictures.length}` : ""}
        </p>
      </div>
    )}
    </div>
  );
};

export default Carousel;


