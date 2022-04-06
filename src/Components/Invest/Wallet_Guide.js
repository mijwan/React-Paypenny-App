import React from "react";
import { Link } from "react-router-dom";
import "./walletGuide.css";


const Wallet_Guide = () => {
    return(
        <>
        <div className="wallet-background">
        <div className="wallet-main-page">
        
            <div className="wallet-first-page">
            <div className="save-money">Save money to buy your future!</div>
            </div>


            <div className="wallet-second-page">
            <p className="second-wallet-para-head">Don't just take our word for it ... </p>
                <div className="second-header">Earn Wallet Guide </div>
                 <div className="wallet-subpage">Want to learn more about the Earn Wallet Process? You will get all the additional information in this guide. Check out & start you journey now!<br/><br/>
                 <Link to="/processflow"><span className="earn-process">Earn Wallet Process </span></Link></div>
                 <div className="second-header">Round the clock Customer Support Help </div>
                 <p>We are avaiable 24/7. Feel free to connect with our team for any queries or issues. They will be happy to assist you. <br/><br/>
                 <Link to="/contact"><span className="earn-process"> Customer Support Help </span></Link></p>
            </div>
        </div>
        </div>
        </>

    )
}

export default Wallet_Guide;