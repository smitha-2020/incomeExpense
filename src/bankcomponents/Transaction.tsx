import React, { useState } from "react";
import { ITransProp } from "../components/Common";

const Transaction = ({
  formDataSavings,
  setBalance,
  balance,
  actualbalance
}: ITransProp) => {
  const [formInput,setFormInput] = useState(0);
  const [formtransaction, setFormtransaction] = useState(0);
  // const dataArrIncomesum = dataArr.reduce((acc,curr)=>{ return (Number(acc)+Number(curr.income)) },0);
  // const dataArrExpenesum = dataArrexpense.reduce((acc,curr)=>{ return (Number(acc)+Number(curr.expense)) },0);

  const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {
    
    evt.persist();

    if (Number(formInput) < Number(formDataSavings) && (Number(formDataSavings) - Number(formtransaction))>0) {
    console.log(Number(formDataSavings))
      setFormtransaction((prevVal) => (((prevVal + Number(formInput))<= Number(formDataSavings)) && (prevVal + Number(formInput)<=balance))?(prevVal + Number(formInput)):prevVal);
      setBalance((prevBalance) =>((prevBalance - Number(formInput))>actualbalance?(prevBalance - Number(formInput)):prevBalance));
    } else {
      throw new Error(
        "Cannot Transfer more than the available balance and set Savings has alaredy moved."
      );
    }
  };
  const handlesubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormInput(parseInt(e.target.value));
  };
  return (
    <>
      <section className="main-section">
        <div className="main-section-div">
          <h5>Savings Target</h5>
          <input
            type="text"
            name="setFormtransaction"
            onChange={(e) => handlesubmit(e)}
            value={formInput}
          ></input>
          <button onClick={(evt) => submitData(evt)}>MOVE TO SAVINGS</button>
        </div>
      </section>
      <div className="main-display main-span">
        <span>Progress so far:</span>
        <span>
          {(formtransaction*100/Number(formDataSavings))||0}%
          <br/>
          <progress id="file" value={formtransaction} max={formDataSavings}>
            {formtransaction}
          </progress>
        </span>
      </div>
    </>
  );
};

export default Transaction;
