import React from 'react'
import "./split-amount.css"

const Split_Amount = () => {
  return (
   <>
    <div className="split-background">    
       <div className="split-content-area">
           <div className="split-header">Split your  lump-sum amount </div>
           <div className="split-content">
               <p>You can split your lump-sum amount into different deposits & invest your money with the flexibility of choosing a separate time period for each investment in one go.</p>
               <p className='split-goal-content'>By multiple investment you can fulfill your financial goals easily!</p>
           </div>

    </div>  

    <div className="split-main-page">
            <div className="split-part1">
            {/* <div className="split-para-heading">Mature Withdrawal </div> */}
            <p className="split_para">Let us split 1000 CAD into three investments-</p><br/>
               <table className="split-table split-table-first">
                 <tbody>
                 <tr>
                     <th>Holding (split Amount)</th>
                     <th>Time period</th>
                     <th>Rate of Interest (%)</th>
                     <th>Maturity Amount</th>
                     <th>Purpose</th>
                 </tr>
                 <tr>
                     <td>500</td>
                     <td>90</td>
                     <td>15</td>
                     <td>518.49</td>
                     <td>Re-investment</td>
                 </tr>
                 <tr>
                     <td>300</td>
                     <td>180</td>
                     <td>17</td>
                     <td>325.15</td>
                     <td>Prom Party</td>
                 </tr>
                 <tr>
                     <td>200</td>
                     <td>365</td>
                     <td>25</td>
                     <td>250.00</td>
                     <td>sister's Birthday</td>
                 </tr>
                 </tbody>
             </table>
             </div>

            <div className="split-part">
            <img src="media/earnwallet1.jpeg" alt="Earn Walletd"/>             
            </div>
            
    </div>
    </div>
   </>
  )
}

export default Split_Amount