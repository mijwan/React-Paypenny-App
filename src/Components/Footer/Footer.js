import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";



const Footer = () =>{
    return(
        <>
  
       <div className="footer-background">
        <div className="footer-main">
           <Link to="/terms"><p className="term-condition">Terms & Conditions</p></Link>
            <Link to="/privacy"><p className="privacy">Privacy Policy</p></Link>
            <Link to="/contact"><p className="contact">Contact Us</p></Link>
        </div>

        <div className="footer-second">
            <p className="paypenny-copy-right">© paypenny all Rights Reserved.<br/>
            The Brand PayPenny belongs to Trackon Canada Private Limited registered in Alberta,Canada.
            </p>
            <div className="footer-icon">
            <a href='https://www.facebook.com/PayPennyCa/' target="_blank"><i className="fa-brands fa-facebook "></i></a>
       <a href='https://www.instagram.com/paypennyca/' target="_blank"> <i className="fa-brands fa-instagram-square "></i></a>
       <a href='https://twitter.com/payPENNY2' target="_blank"><i className="fa-brands fa-twitter"></i></a>
            </div>
        </div>
       </div>



        </>
    )
}

export default Footer;