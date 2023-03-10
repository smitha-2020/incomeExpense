import React, { useState } from 'react'
import { IncomeProp } from '../components/Common';
import uuid4 from 'uuid4';

const Income = ({ formDataincome, setFormData, setDataArr, dataArr }: IncomeProp) => {
  const arrIncomeSource = ["","salary","shares","rent","overtime","other"]
  const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.persist();
    if (!(formDataincome.incomesource === "" || formDataincome.income === "" || formDataincome.incomedate === "")) {
      formDataincome.incomeid = uuid4();
      setDataArr([...dataArr, formDataincome]);
      setFormData({ incomeid: "", incomesource: "", income: "", incomedate: "" });
    }
  }
  const handlesubmit = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormData((prevVal) => ({ ...prevVal, [field]: e.target.value }));
  }
  const selectSubmit = (field: string, evt: React.ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    setFormData((prevVal) => ({ ...prevVal, [field]: evt.target.value }));
  }
  return (
    <>
      <section className="main-section">
        <div className="main-section-div">
          <h5>Add Income</h5>
          <p> <span>Income Source</span>
            <select onChange={(evt) => selectSubmit('incomesource', evt)} name="incomesource" value={formDataincome.incomesource}>
              {
                 arrIncomeSource.map((source) => <option value={source}>{source}</option>)
              }
            </select>
          </p>
          <p> <span>Income Amount</span> <input type="text" name="income" onChange={(e) => handlesubmit('income', e)} value={formDataincome.income}></input></p>
          <p> <span>Date of Income</span> <input type="date" name="incomedate" onChange={(e) => handlesubmit('incomedate', e)} value={formDataincome.incomedate}></input></p>
          <p><span className=','></span></p>
          <button onClick={(evt) => submitData(evt)}>SAVE</button>
        </div>
      </section>

    </>
  )
}

export default Income