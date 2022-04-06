import React from "react";
import "./component1.css";



const Component1 = () =>{
    return(
        <>
<div className="download-background">
<div className="container section download-app-part">
    <div className="download-main-header">Start investing now to earn maximum returns!</div>
        <div className="row">
             <div className="col-md-6 download-image">
            <p>Get the app</p>
             <img src="media/5.png" alt="Who we are"/>
            </div>

            <div className="col-md-6 download-app">
              <div className="items-align">
                  <div className="text-download">Download the Paypenny App now</div>

            <img src="media/app.png" alt="macbook app"/><br/>
            <img src="media/google.png" alt="play store"/>
              {/* <button className="who-btn"><a href="#"> <i class="fa-solid fa-download"></i> &nbsp;<span>Download on the</span><br/>Google Play</a></button> <br/>
                <button className="who-btn1"><a href="#"><i class="fa-brands fa-apple"></i> &nbsp;<span>Get it on</span><br/> App Store </a></button> */}
                <br/>
                <span className="font-icon">
                    <i className="fa-brands fa-facebook "></i>
                    <i className="fa-brands fa-instagram-square "></i>
                    <i className="fa-brands fa-twitter"></i>
                </span>
        </div>
  </div>

        </div>
    </div>
</div>
        </>
    )
}

export default Component1;
