import React from 'react'
import "./mainPageFaq.css"

const MainPageFaq = () => {
  return (
    <>
    <div className='mainFaq-background'>
        <h1 className="mainFaq-header">Frequently Asked Questions</h1>
        <div className='mainFaq-area'>
            <div className='mainFaq-part'>
                <h3>How can I top up my Paypenny account?</h3>
                <p>You can top up your paypenny account through a bank wire transfer or Interac E- transfer.</p>
            </div>
            <div className='mainFaq-part1'>
                <h3>Do I need to verify my account?</h3>
                <p>As a fully regulated financial services business, we are required to verify the identity of all our customers. Where possible we attempt to speed up the process through electronic checks. Where this isn’t possible, we require proof of identification.</p>
            </div>
        </div>
    </div><hr/>
    </>
  )
}

export default MainPageFaq