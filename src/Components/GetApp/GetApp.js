import React from 'react'
import "./getApp.css";

const GetApp = () => {
  return (
    <>
    <div className='getApp-background'>
      <div className='getApp-main'>
        <div className='getApp-part'>
        <p>Get the app</p>
             <img src="media/5.png" alt="Who we are"/>
        </div>
        <div className='getApp-part1'>
        <p>Download the Paypenny App now</p>
       <a href='https://apps.apple.com/in/app/paypenny/id1545140323' target="_blank"><img src="media/app.png" alt="macbook app"/></a><br/>
        <a href='https://play.google.com/store/apps/details?id=com.bhanguz.Paypenny&hl=en_IN&gl=US' target="_blank"><img src="media/google.png" alt="play store"/></a>
    <br/>
    <span className="social-icon">
        <a href='https://www.facebook.com/PayPennyCa/' target="_blank"><i className="fa-brands fa-facebook "></i></a>
       <a href='https://www.instagram.com/paypennyca/' target="_blank"> <i className="fa-brands fa-instagram-square "></i></a>
       <a href='https://twitter.com/payPENNY2' target="_blank"><i className="fa-brands fa-twitter"></i></a>
    </span>
        </div>
      </div>
    </div>

    <div className='brand-Ambassador-Program'>
      <h2 className='brand-Ambassador-header'>Become Our Brand Ambassador </h2>
      <p className='brand-Ambassador-content'>Are you a social media buzz? Become our ambassador and if you are lucky, you might be chosen for our campaigns soon and will get exclusive rewards!</p>
      <div className="brand-Ambassador-btn"><a href='https://pdahfg0f1c8.typeform.com/to/hgqcre6X' target="_blank"><button className='band-start-btn'>Join the Program </button></a></div>      
    </div>
    </>
  )
}

export default GetApp