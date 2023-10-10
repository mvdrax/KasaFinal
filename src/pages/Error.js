import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { NavLink } from "react-router-dom";


const Error = () => {
 
  return ( 
    <div>
    <Header /> 
    <div className="error">

      <div className="errorContent">
        <p className="errorTitle">404</p>
      <div className="errorScdTitleBox">
      <h1 className="errorScdTitle">Oups! La page que vous demandez n'existe pas.</h1>
      </div>
      <NavLink to="/" className="errorLink"> Retourner sur la page d'accueil </NavLink>
      </div>

    </div>
    <Footer />
    </div>
  );
};

export default Error;