import React,{useState} from "react";
import "./component.css";



const Component = () =>{

    const [name , setName] = useState("100");
    const [name1 , setName1] = useState("10");

    const InputEvent = (e) =>{
         setName(e.target.value);
        }
        const InputEvent1 = (e) =>{
            setName1(e.target.value);
        }

    const Calculator = () =>{
        const amount_input = parseInt(document.getElementById("input_Amount").value);
       const rate_input = parseInt(document.getElementById("interest_data").value);
       const time_input = parseInt(document.getElementById("duration").value);
      const interest = amount_input * rate_input/100 * time_input/365;
      const total = interest + amount_input;

      const total1 = total.toFixed(2);
      document.getElementById("output_1").innerHTML = total1;    
    }

    const FinalValue = () =>{
        // const enter_Value = document.getElementById("output_1");
        // FinalValue.value = [enter_Value.value = 0];
        document.getElementById("output_1").innerHTML =  0;
    }

    let intObj = {
        10: 10,
        15: 11,
        30: 12,
        45: 13,
        60: 14,
        90: 15,
        180: 17,
        365: 25 
    } 
    const SetValue = () =>{  
    const currVal = document.getElementById("duration"); 
    const setData = document.getElementById("interest_data");   
    setData.value = intObj[currVal.value];  
    
    }

    return(
        <>
         <div className="calculator-section">
       <h2 className="second-main-header">Invest smarter with Earn Wallet</h2><br/>
       <div className="second-main-content">
           <p>Deposit your money with us to earn up to 25% interest per annum in CAD. </p>
           <p>Get the industry’s best return on investment, that too by investing for as low as 10 days .</p>
       </div>

       <div className="calculate-section">
            <div className="calculate-part">

             <table className="roi-table" border="1">
                 <tr>
                     <th className="duration-heading">Duration</th>
                     <th className="roi-heading">ROI (per annum)</th>
                 </tr>
                 <tr>
                     <td>10 days</td>
                     <td>10%</td>
                 </tr>
                 <tr>
                     <td>15 days</td>
                     <td>11%</td>
                 </tr>
                 <tr>
                     <td>30 days</td>
                     <td>12%</td>
                 </tr>
                 <tr>
                     <td>45 days</td>
                     <td>13%</td>
                 </tr>                
                 <tr>
                     <td>60 days</td>
                     <td>14%</td>
                 </tr>
                 <tr>
                     <td>90 days</td>
                     <td>15%</td>
                 </tr>
                 <tr>
                     <td>180 days</td>
                     <td>17%</td>
                 </tr>
                 <tr>
                     <td>365 days</td>
                     <td>25%</td>
                 </tr>
             </table>
       

         <div className="calculate-try">
             <span>Try it now &nbsp; <img  src="media/down-arrow.gif"/></span>
         </div>

          <label>Amount : &nbsp; </label>
          <input type="text" 
          id="input_Amount"
          onClick={FinalValue}
           value={name}
           onChange={InputEvent}/>

          <label className="duration">Duration: </label>
          <select name="duration" id="duration" onChange={SetValue} >
              <option value="10" className="input_time" >10 days</option>
              <option value="15" className="input_time1">15 days</option>
              <option value="30" className="input_time2">30 days</option>
              <option value="45" className="input_time3">45 days</option>
              <option value="60" className="input_time4">60 days</option>
              <option value="90" className="input_time5">90 days</option>
              <option value="180" className="input_time6">180 days</option>
              <option value="365" className="input_time7">365 days</option>
          </select>
          <label className="roi-annum">ROI(Per Annum):&nbsp; </label>
          <input type="text"
           id="interest_data" 
           value={name1}
           onChange={InputEvent1}/>
           <button onClick={Calculator} className="main-output-button">Maturity Amount</button> <span id="output_1" className="output_part" >100.27 </span>
            </div> 

            <div className="calculate-part1">
                <img src="media/calculator.gif" alt="Who we are"/>
            </div>
        </div>
    </div>
    </>
    )
}

export default Component; 