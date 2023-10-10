import React, { useEffect } from 'react'
import Header from '../components/Header';
import data from '../data/data.json' ;
import Footer from '../components/Footer' ;
import Carousel from '../components/Carrousel';
import Collapse from '../components/Collapse';
import Stars from '../components/Stars';
import { useParams , useNavigate} from "react-router-dom";


function Housings() {

    const { id } = useParams();
    const item = data.find((item) => item.id === id);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!item) {
          console.log("Pas de page pour cet ID.");
          navigate("/error");
        }
      }, [item, navigate]);




      if (item) {
    const equipments =item.equipments;
    const description =item.description;
    const ltags =item.tags
    const rating = item.rating;

    

    



    return (
        <div>
            <Header />
            
            <Carousel className='carrousel' pictures={item.pictures} />

          <div className='infosBox'>

            <div className='housingInfos'>
            
            <div className='housingInfoshouseAndtags'>

            <div className='houseInfos'>
            <h1 className='housingTitle'>{item.title}</h1>
            <h2 className='housingLocation'>{item.location}</h2> 
            </div>

            <ul className='housingTags'>
            {ltags.map((tags, index) => (
                    <li key={index} className="housingTag">
                      {tags}
                    </li>
                  ))}
            </ul>

            </div>

            <div className='housingHostAndRating'>

            <div className='hostInfos'>
            <h3 className='hostName'>{item.host.name}</h3>
            <img
                  className="hostPic"
                  src={item.host.picture}
                  alt={item.host.name}
                />
                
            </div>

            <Stars className="ratingDisplay" rating={rating} />
            </div>


            </div>
            
            </div>

            
            <div className='clpsbox'>
            <div className='collapseDisplay'>
            <Collapse className="collapseBtn1" title="Description  " content={description} />
            <Collapse className="collapseBtn2" title="Equipements" content={
               <ul className="eqpmts-list">
                  {equipments.map((equipment, index) => (
                    <li key={index} className="equipement">
                      {equipment}
                    </li>
                  ))}
                </ul>
              }
 />
            </div>
            
            </div>
            
            <Footer />
        </div>
    );
            }
};

export default Housings;

