import React from "react";
import "./about.css";


const About_Model = () => {
  return (
     <>
     <div className="why-choose-background">
       <h1 className="why-choose-us-header">Why Choose Us ?</h1>
     <div className="why-choose-box">
       <div className="why-choose-main">
         <div className="why-choose-part">
           <img src="media/choose-fast.png"  alt="We're fast"/>
           <p>90% of our transactions <br/> are authorized in minutes</p>
           <img src="media/choose-safe.png" className="why-choose-safe-image" alt="We're fast"/>
           <p>90% of our transactions <br/>are authorized in minutes</p>
         </div>
         <div className="why-choose-part1">
           <img src="media/3.png" alt="why choose"/>
         </div>
         </div>
       </div>
     </div>
     </>
  );
};

export default About_Model;