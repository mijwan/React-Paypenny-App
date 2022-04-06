import React from 'react'
import "./processflow.css";



const ProcessFlow = () => {
  return (    
    <>
    <div className='process-header'>Customer Journey -Earn wallet </div>
    <div className='process-flow-main'>
        <div className='process-flow-content'>
        <h3> Earn fabulous returns</h3>
            <ol>
                <li>Click on “Staking” in your PayPenny app. You will reach on Earn Wallet page.</li>
                <li>Here you will see the amount which you have in your main wallet. On clicking the “Up 
                green arrow “entire money from your main wallet is transferred to your earn wallet. If you 
                don’t want to invest the entire amount you can choose to enter any amount as per your 
                wish, but it should be more than CAD 100.</li>
                <li>On clicking the down arrow, you can transfer the entire fund back to your main wallet.</li>
                <li>Once you have selected the amount which you want to invest, either by manually typing it n the Earn box or using green arrows, you must click on the blue tick, so that your staking button is highlighted. Below the staking is the “Holding” icon displaying your last investment.</li>
                <li>If you click on “Holding” it will show all the investments (Holdings) held by you in the Earn wallet.</li>
                <li> Again, if you click on any holding, your investment details like value date, interest period, redemption date, interest applied, and your maturity amount will be displayed.</li>
                <li>Now if you click on “Staking”, you will be directed to “Products” screen where you can choose the amount to invest = “Lock Amount”, you must also choose the duration, once you have done that, corresponding Interest Rate, and the amount you get on maturity is displayed.</li>
                <li>One “ADD” button is also present on the “Products” screen on clicking it you can invest other amount with your desired duration and on entering the desired values again maturity amount is displayed</li>
                <li>You can use this option multiple times till there is at least 100 CAD in your Earn Wallet. If any amount is left for investing, it remains in the Earn wallet. Also, the Bal (balance tab) in Earn Wallet should indicate the balance left in the Earn Wallet after Staking</li>
                <li> You can change the “Lock Amount” and duration and once you are satisfied, with your maturity amount= “Amount you will get”, you can go on and click the submit button.</li>
                <li>You will be directed to the Summary screen, where you will get the following information for all your holdings
                 <ul>
                     <li>Staked Date= Investment date</li>
                     <li>Value Date= Investment date</li>
                     <li>Interest Period= duration of your investment</li>
                     <li>Interest End Date= Maturity date</li>
                     <li>Redemption date= Maturity date</li>
                     <li>Est Apy = Interest applied</li>
                     <li>Total CAD you get= Maturity amount</li>
                 </ul>

                </li>
                <li> Once you are satisfied you can select the check box and give your confirmation, that to agree to our terms and conditions.</li>
                <li>Then you click on “Confirm” to book the investment.</li>
                <li>You will now be automatically directed to the landing page of the app, where you will receive the message “Earn wallet interest added successfully”.</li>
                <li>To check your investment, you can once again click on “staking”, you will be directed to Earn wallet screen and there at the bottom you can see your investment or “Holding” on clicking holding you can view your investment details.</li>
                <li>Also, on clicking each Holding you will get “Claim” button for premature withdrawal on clicking it a pup up message will appear saying “You will get CAD….. as your final amount,only ……..days are left in maturity, if you keep your investment till maturity you will get CAD……”</li>
                <li>"Agree” button is also there, once the client clicks on agree, the mentioned amount in the pop-up message will be credited in client’s Earn wallet.</li>
                <li>Once the holdings matured the money is credit to Earn Wallet and from there the client can easily transfer the funds to main wallet by using “green toggle arrows “in the “Earn Wallet screen”.</li>               
            </ol>
        </div>
    </div>
       
    </>
  )
}

export default ProcessFlow