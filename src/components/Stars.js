import React from "react";

const Stars = ({ rating }) => {

  const colorstars = rating;

  const emptystars = 5 - colorstars;

  const displayRating = () => {
    const star = [];

    for (let i = 0; i < colorstars; i++) {
      star.push(
        <i
          key={`colorstars_${i}`}
          className="fa-solid fa-star colorstars"
        ></i>
      );
    }

    for (let j = 0; j < emptystars; j++) {
      star.push(
        <i key={`emptystars_${j}`} 
        className="fa-solid fa-star emptystars"></i>
      );
    }

    return star;
  };

  return <div className="displayRating">{displayRating()}</div>;
};

export default Stars;