import React from "react";

import data from '../data/data.json' ;
import {Link} from "react-router-dom";


function Card () {
    
return (
    <div className="cardsBox">
<div className="kasaCard"> 


    {
    data.map((data,i) => (
        <li className="cardes" key={i}>
            
            
            
            <Link className="cardLink" to={`/logement/${data.id}`}>
                <div className="card">
                <h2 className="cardTitle">{data.title}</h2>
                <img className="cardsimg" src={data.cover} alt="logements"></img>
                </div>
            </Link>
            
            
            
        </li>
    ))
       
    }

</div>
</div>
)
}

export default Card;
