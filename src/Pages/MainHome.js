import React from "react";
import About_Model from "../Components/About/About_Model";
import Download from "../Components/Download/Download";
import Footer from "../Components/Footer/Footer";
import Header1 from "../Components/Header/Header1";
import MainPageFaq from "../Components/GetApp/MainPageFaq";
import GetApp from "../Components/GetApp/GetApp";
import VideoSection from "../Components/VideoSection/VideoSection";
import Benefits_IRN from "../Components/Benefits/Benefits_IRN";
import Create_Model from "../Components/CreateAccount/Create_Model";
import Paypenny_App from "../Components/PaymentApp/Paypenny_App";

const MainHome = () => {
  return (
    <>
      <Header1 />
      <VideoSection />
      <Download />
       <Create_Model />
      <Benefits_IRN />
      <About_Model />
      <Paypenny_App />
      <GetApp />
      <MainPageFaq />
      <Footer /> 
    </>
  );
};

export default MainHome;