import React from "react";
import LogoFooter from "../assets/logoKasaFooter.svg" ;


function Footer() {
    return (
        <div className="footer">
            <img src={LogoFooter} alt='Kasa' className='kasa-logo-footer' />
            <p className="txt-footer">
            © 2020 Kasa. All rights reserved
            </p>
        </div>

    );
};

export default Footer;