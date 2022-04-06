import React from "react";
import "./home.css";
import { Link } from "react-router-dom";


const Home = () => {
    return(
     <>
      <div className="main-header-page">
        <div className="logo-header">
           <Link to="/"><img src="media/logo.gif" alt="logo"/></Link>
        </div>
        <div className="logo-header-content">
        Paypenny present’s Earn Wallet
        </div>
    </div>
  <div className="home-background">
    <div className="home-section">   
      
        <div className=" component-part">
            <img src="media/home.jpg" alt="Front Page Image"/>
            </div>

            <div className=" component-part1">
             <div className="home-page-header">
             Maximize your money and transform it into a treasure!
             </div>
             <p className="home-page-content">An exciting opportunity to earn massive interest on your savings. Grow your money by a hassle-free process with Earn Wallet. </p>
            </div>
       
    </div>
    </div>

     </>
    );
}

export default Home;