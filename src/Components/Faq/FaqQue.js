import React from "react";
import "./faqQue.css";


const FaqQue = () =>{
    return(
        <>

     <section className="accordion-section clearfix mt-3 faqs-home-page" aria-label="Question Accordions">
        <div className="container">
        
            <h1 className="faq_header">
            Everything you need to know about investing money with Paypenny 
             </h1>

            <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

            	<div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading0">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
                        <i class="fa-solid fa-plus"></i> How to transfer money to Earn Wallet?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse0" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                      <div className="panel-body px-3 mb-4">
                        <p>You can initiate an Interac e Transfer from your bank account and your funds will be credited to the main wallet of Paypenny from where you can transfer to the Earn Wallet.</p>
                        
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading1">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                        <i class="fa-solid fa-plus"></i> Where will the money go after the maturity?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                      <div className="panel-body px-3 mb-4">
                        <p>Your money will go to the Earn Wallet and then you have to transfer it to the main wallet from where you can send it to your bank account.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading2">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                        <i class="fa-solid fa-plus"></i>  Can I do multiple investments in one go?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                      <div className="panel-body px-3 mb-4">
                        <p>Yes, you can do multiple investments. You have to click the ‘add’ button in Earn Wallet and you can select different amounts for different periods.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading3">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                        <i class="fa-solid fa-plus"></i> Can my money be directly transferred from the Earn Wallet to my bank account?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                      <div className="panel-body px-3 mb-4">
                        <p>No, first you have to transfer your money to the main wallet from Earn Wallet and then you can transfer it to your bank account.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading4">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="true" aria-controls="collapse4">
                        <i class="fa-solid fa-plus"></i> What will be the minimum amount for each investment if I am doing multiple investments?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                      <div className="panel-body px-3 mb-4">
                        <p>The minimum amount is 100 CAD for multiple investments and as well as for single investment.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading5">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="true" aria-controls="collapse5">
                        <i class="fa-solid fa-plus"></i> Why invest with Paypenny?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                      <div className="panel-body px-3 mb-4">
                        <p>Invest with Paypenny to earn Industry’s highest fixed interest rates up to 25% per annum on your invested amount, that too for a short duration of up to 1 year.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading6">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse6" aria-expanded="true" aria-controls="collapse6">
                        <i class="fa-solid fa-plus"></i> Is my money completely safe?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse6" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading6">
                      <div className="panel-body px-3 mb-4">
                        <p>Yes, your money is completely safe with us. We have been serving 7000+ customers and we are licensed and registered with FINTRAC. Don’t worry, invest now to get the best returns.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading7">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse7" aria-expanded="true" aria-controls="collapse7">
                        <i class="fa-solid fa-plus"></i> How can I withdraw my funds?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse7" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading7">
                      <div className="panel-body px-3 mb-4">
                        <p>At the end of the maturity period, your money gets transferred to the Earn Wallet from there you can transfer it your main wallet and then into your bank account.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading8">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse8" aria-expanded="true" aria-controls="collapse8">
                        <i class="fa-solid fa-plus"></i> How can I deposit funds?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse8" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading8">
                      <div className="panel-body px-3 mb-4">
                        <p>You can initiate an Interac e-Transfer from your bank account and your funds will be credited to the main wallet of Paypenny from where you can transfer to the Earn Wallet.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading9">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse9" aria-expanded="true" aria-controls="collapse9">
                        <i class="fa-solid fa-plus"></i> How to calculate my earnings?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse9" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading9">
                      <div className="panel-body px-3 mb-4">
                        <p>You can easily calculate your earnings by choosing your investment amount and duration in the calculator provided on your Earn wallet page.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading10">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse10" aria-expanded="true" aria-controls="collapse10">
                        <i class="fa-solid fa-plus"></i> What is the minimum and maximum amount I can invest?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse10" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading10">
                      <div className="panel-body px-3 mb-4">
                        <p>You can start investing from as low as 100 CAD and there is no maximum limit.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading11">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse11" aria-expanded="true" aria-controls="collapse11">
                        <i class="fa-solid fa-plus"></i> Can I use my friend’s funds to invest?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse11" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading11">
                      <div className="panel-body px-3 mb-4">
                        <p>You can use your friend’s funds but they can be deposited from your own bank account only.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading12">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse12" aria-expanded="true" aria-controls="collapse12">
                        <i class="fa-solid fa-plus"></i> What is the difference between the main wallet and the Earn wallet?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading12">
                      <div className="panel-body px-3 mb-4">
                        <p>The main wallet is to transfer funds from your bank account and also to withdraw funds to your bank account whereas the Earn Wallet is to hold funds and earn interest.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading13">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse13" aria-expanded="true" aria-controls="collapse13">
                        <i class="fa-solid fa-plus"></i>  Do I need to verify myself on the app?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse13" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading13">
                      <div className="panel-body px-3 mb-4">
                        <p>If you are an existing user of the Paypenny then there is no need for verification. If you are a new user then as a fully regulated financial services business, we are required to verify the identity of all our customers. However, it takes less than a minute to get verified.</p>
                      </div>
                    </div>
                  </div>


                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading14">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse14" aria-expanded="true" aria-controls="collapse14">
                        <i class="fa-solid fa-plus"></i> Will my earnings be tax-free?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse14" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading14">
                      <div className="panel-body px-3 mb-4">
                        <p>No, your earnings are not tax-free.</p>
                        
                      </div>
                    </div>
                  </div>
                  
                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading15">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse15" aria-expanded="true" aria-controls="collapse15">
                        <i class="fa-solid fa-plus"></i> Will you deduct the tax beforehand?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse15" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading15">
                      <div className="panel-body px-3 mb-4">
                        <p>Paypenny does not deduct any taxes.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading16">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse16" aria-expanded="true" aria-controls="collapse16">
                        <i class="fa-solid fa-plus"></i> Are there any hidden charges or fees?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse16" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading16">
                      <div className="panel-body px-3 mb-4">
                        <p>No, there are no hidden charges or fees. You will get the same amount as shown in the calculator.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading17">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse17" aria-expanded="true" aria-controls="collapse17">
                        <i class="fa-solid fa-plus"></i> What if I withdraw before the maturity date?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse17" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading17">
                      <div className="panel-body px-3 mb-4">
                        <p>You can also withdraw the money prematurely and you will still earn interest @ 10 % per annum.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading18">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse18" aria-expanded="true" aria-controls="collapse18">
                        <i class="fa-solid fa-plus"></i> What does the locking period mean?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse18" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading18">
                      <div className="panel-body px-3 mb-4">
                        <p>The Locking period is only for 10 days. It simply means you can withdraw prematurely after 10 days from the start date of your investment..</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading19">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse19" aria-expanded="true" aria-controls="collapse19">
                        <i class="fa-solid fa-plus"></i> What are the ways to deposit money?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse19" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading19">
                      <div className="panel-body px-3 mb-4">
                        <p>You can top up your Paypenny account through a bank wire transfer or Interac e-transfer.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading20">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse20" aria-expanded="true" aria-controls="collapse20">
                        <i class="fa-solid fa-plus"></i> Can I use my credit card to invest?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse20" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading20">
                      <div className="panel-body px-3 mb-4">
                        <p>No, you can’t use a credit card for investing money.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading21">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse21" aria-expanded="true" aria-controls="collapse21">
                        <i class="fa-solid fa-plus"></i> Do you allow bank overdraft money?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse21" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading21">
                      <div className="panel-body px-3 mb-4">
                        <p>Yes, you may use overdraft money if you want but we encourage you to use the funds freely available to you for investment.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading22">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse22" aria-expanded="true" aria-controls="collapse22">
                        <i class="fa-solid fa-plus"></i> Is there any catch?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse22" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading22">
                      <div className="panel-body px-3 mb-4">
                        <p>There is no catch. You get the same amount that is shown in the calculator.</p>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default">
                    <div className="panel-heading p-3 mb-3" role="tab" id="heading23">
                      <h3 className="panel-title">
                        <a className="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse23" aria-expanded="true" aria-controls="collapse23">
                        <i class="fa-solid fa-plus"></i> It sounds too good to be true?
                        </a>
                      </h3>
                    </div>
                    <div id="collapse23" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading23">
                      <div className="panel-body px-3 mb-4">
                        <p>Some people might say this, but what we say is that you are investing in the growth of Paypenny meaning you are growing financially with us.</p>
                      </div>
                    </div>
                  </div>

                 
              
            </div>
        
        </div>
      </section>
    
        </>
    )
}

export default FaqQue;