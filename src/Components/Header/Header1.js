import React from 'react';
import { Link } from 'react-router-dom';
import "../About/home.css"
import "./header1.css"

const Header1 = () => {
  return (
    <>
    <div className="navbar-background"> 
      <div className='header-logo-area'>
        <div className="logo-main-header">
           <Link to="/"><img src="media/logo.gif" alt="logo"/></Link>  
        </div>
        <div className="logo-Interac_Brand">
          <a href='https://www.interac.ca/en/content/life/three-reasons-to-set-up-interac-e-transfer-autodeposit-today/' target="_blank">
       <img src='media/Interac_Brand.png' className='interac-logo-image' alt='Interac_Brand'/>
       </a>
       <Link to="/body"><span className='brand-name-earnWallet'><img src="media/Earn-logo.gif" className='earn-wallet-log' alt="logo"/></span></Link>
      
        </div>
    </div>
    </div>
    </>
  )
}

export default Header1;