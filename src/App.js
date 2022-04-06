import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
// import Body from './Body'
import MainContact from './Pages/MainContact';
import TermsCondition from "./Pages/Terms";
import Privacy from "./Pages/Privacy"
import Process from './Pages/Process';
import MainHome from './Pages/MainHome';
import "./App.css"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Body from './Body';




const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
    <BrowserRouter>
    <Routes>
        
        <Route path={'/'} element={<MainHome/>}/>
        <Route path={'/body'} element={<Body/>} />
        <Route path={'/terms'} element={<TermsCondition/>}/>
        <Route path={'/contact'} element={<MainContact />} />
        <Route path={'/privacy'} element={<Privacy />}/>
        <Route path={'/processflow'} element={ <Process />} />
        
    </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App;