import React from "react";
import "./invested.css";



const Invested = () =>{
return(
    <>
       <div className="invested-background">    
       <div className="invested-content-area">
           <div className="invested-header">Earn on Premature Withdrawals</div>
           <div className="invested-content">
               <p>You can also withdraw the money prematurely and you will still earn interest @ 10 % per annum.</p>
               <p>Minimum deposit period is only 10 days . </p>
           </div>

    </div>  

    <div className="invested-main-page">
        <div className="invested-part">
            <img src="media/invest.gif" alt="investment"/>             
            </div>
            
            <div className="invested-part1">
            <div className="invested-para-heading">Amount at Maturity</div>
            <p className="invested_para">Let us take the duration of the maturity as 45 days.</p><br/>
               <table className="invest-table invest-table-first">
                 <tbody>
                 <tr>
                     <td>Invested amount</td>
                     <td>1000</td>
                 </tr>
                 <tr>
                     <td>Interest for 45 days <span className="intrest-days">@ 13% </span></td>
                     <td>16.03</td>
                 </tr>
                 <tr>
                     <td>Amount</td>
                     <td>1016.03</td>
                 </tr>
                 </tbody>
             </table>

             <div className="invested-para-heading">Premature Withdrawal</div>
              <p className="invested_para1">You withdrawal on the 44th day (one day before maturity period)</p><br/>       
                <table className="invest-table" border="1">
                 <tbody>
                 <tr>
                     <td>Invested amount</td>
                     <td>1000</td>
                 </tr>
                 <tr>
                     <td>Interest for 44 days <span className="intrest-days"> @ 10% </span></td>
                     <td>12.05</td>
                 </tr>
                 <tr>
                     <td>Amount</td>
                     <td>1012.05</td>
                 </tr>
                 </tbody>
             </table>
            </div>
    </div>
    </div>
    </>
)
}

export default Invested;