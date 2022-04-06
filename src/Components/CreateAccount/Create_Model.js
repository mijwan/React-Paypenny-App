import React from 'react'
import "./account.css"

const Create_Model = () => {
  return (
    <>
<section id="counts" className="counts create-account-background">
  <div className="container container-create">
    <div className="row">
      <div className="col-lg-3 col-md-6">
        <div className="count-box">          
          <img src='media/right.png' alt=""/>
          <div className="value purecounter">Create your account</div>
          <div className="choose-title">Register online, enter your personal details for ID verification. Make sure what you enter matches exactly with your identification documents.</div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
        <div className="count-box">
          <img src='media/choose.gif'/>
          <div className="value purecounter" akhi="42">Choose method</div>
          <div className="choose-title">We’ll show you the exchange rate and you Select the Method to add the INR(D) to your wallet.</div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div className="count-box">
          <img src='media/input.gif'/>
          <div className="value purecounter" akhi="445">Input receiver details</div>
          <div className="choose-title">Tell us the details of the person receiving the INR(D).</div>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
        <div className="count-box">
          <img src='media/send.gif'/>
          <div className="value purecounter" akhi="1050">Confirm and send</div>
          <div className="choose-title">Verify and cross check everything is correct and send your INR(D). That’s it. We’ll take care of the rest and tell you when INR(D) is transferred.</div>
        </div>
      </div>

    </div>

  </div>
</section>
    </>
  )
}

export default Create_Model