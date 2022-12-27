import React, { useState } from "react";

import { ITransProp } from "../components/Common";

const Transaction = ({
  formDataSavings,
  setBalance,
  balance
}: ITransProp) => {
  const [formInput, setFormInput] = useState(0);
  const [formbalanceInput, setFormBalanceInput] = useState(0);
  const [formtransaction, setFormtransaction] = useState(0);
  const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.persist();
    if ((Number(formInput) <= Number(formDataSavings) && (Number(formDataSavings) - Number(formtransaction)) && (Number(formInput) <= Number(balance))) > 0) {
      setFormtransaction((prevVal) => (((prevVal + Number(formInput)) <= Number(formDataSavings)) && (prevVal + Number(formInput) <= balance)) ? (prevVal + Number(formInput)) : prevVal);
      setBalance((prevBalance) => ((prevBalance - Number(formInput)) >= 0 ? (prevBalance - Number(formInput)) : prevBalance));
    } else {
      throw new Error(
        "Cannot Transfer more than the available balance."
      );
    }
  };
  const submitBalance = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.persist();
    if (Number(formbalanceInput) <= Number(formtransaction)) {
      setBalance(((prevVal) => (prevVal <= (balance + Number(formtransaction))) ? (prevVal + Number(formbalanceInput)) : prevVal))
      setFormtransaction((prevVal) => (prevVal - Number(formbalanceInput)))
    }
    else {
      throw new Error(
        "Cannot Transfer more than the savings amount."
      );
    }
  };
  const handlesubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const theInt = parseInt(e.target.value, 10);
    setFormInput((isNaN(theInt)) ? 0 : theInt)
  };
  const handlebalancesubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const theVal = parseInt(e.target.value, 10);
    setFormBalanceInput((isNaN(theVal)) ? 0 : theVal)
  }
  return (
    <>
      <section className="main-transaction-secion">
        <h5>Savings Target</h5>
        <div className="main-transaction-secion-div">
          <input
            type="text"
            name="setFormtransaction"
            onChange={(e) => handlesubmit(e)}
            value={formInput}
          ></input>
          <button onClick={(evt) => submitData(evt)}>MOVE TO SAVINGS</button>
        </div>
        <div className="main-transaction-secion-div">
          <input
            type="text"
            name="setFormtransaction"
            onChange={(e) => handlebalancesubmit(e)}
            value={formbalanceInput}
          ></input>
          <button onClick={(evt) => submitBalance(evt)}>MOVE BACK TO BALANCE</button>
        </div>
      </section>
      <div className="main-display main-span">
        <span>Progress so far:</span>
        <span>
          {(formtransaction * 100 / Number(formDataSavings)) || 0}%
          <br />
          <progress id="file" value={formtransaction} max={formDataSavings}>
            {formtransaction}
          </progress>
        </span>
      </div>
    </>
  );
};

export default Transaction;
