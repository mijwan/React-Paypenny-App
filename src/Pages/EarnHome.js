import React from 'react'
import Home from '../Components/About/Home'
import Component from '../Components/Calculator/Component'
import Service from '../Components/Service/Service'
import Split_Amount from '../Components/Split/Split_Amount';
import Invested from '../Components/Invest/Invested'
import ReviewPage from '../Components/Review/ReviewPage'
import FaqQue from '../Components/Faq/FaqQue';
import Wallet_Guide from '../Components/Invest/Wallet_Guide'
import Component1 from '../Components/Invest/Component1'
import Footer from '../Components/Footer/Footer';



const EarnHome = () => {
  return (
   <>
   <Home />
   <Component />
   <Service />
   <Split_Amount />
   <Invested />
   <ReviewPage />
   <FaqQue />
   <Wallet_Guide />
   <Component1 />
   <Footer />
   </>
  )
}

export default EarnHome