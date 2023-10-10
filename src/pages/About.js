import React from 'react'
import Header from '../components/Header' ;
import Collapse from '../components/Collapse' ;
import Banner from '../components/Banner';
import Footer from '../components/Footer' ;



function About() {
    return (
        <div>
            <Header />
            <Banner />
            <div className='collapseBtnsBox'>
            <div className='collapseBtns'>
            <Collapse className="collapseBtn1" title="Fiabilité" content=" Les annonces postées sur Kasa garantissent une fiabilité totale. 
            Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes. " />
            <Collapse className="collapseBtn1" title="Respect" content=" La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. " />
            <Collapse className="collapseBtn1" title="Service" content=" La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme. " />
            <Collapse className="collapseBtn1" title="Sécurité" content=" La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes. " />
            </div>
            </div>
            <Footer />

        </div>
    );
};

export default About;
