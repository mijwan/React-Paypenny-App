import React from "react";
import video from "../../Assets/Pexels Videos 1826896.mp4";
import "./videoSection.css";

const VideoSection = () => {
  return (
    <div className="mainContainer">
      <div className="section-Video">
        <video muted autoPlay loop src={video}></video>
      </div>
      <h1>BUY SELL OR SEND INR(D) TO INDIA</h1>
      <div className="animatedArrow">
        <i className="fa-solid fa-angle-down"></i>
      </div>
    </div>
  );
};

export default VideoSection;