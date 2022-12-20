import React, { useState } from 'react'
import { formDataexpense,formDataincome,formDataSavings } from '../components/Common';

const Transaction = ({formtransaction,formDataSavings,setFormtransaction,dataArrexpense,dataArr,actualbalance,setActualbalance,setBalance,balance}:{formtransaction:string,formDataSavings:string,setFormtransaction: React.Dispatch<React.SetStateAction<string>>,dataArrexpense:formDataexpense[],dataArr: formDataincome[],actualbalance:number,setActualbalance:React.Dispatch<React.SetStateAction<number>>,setBalance:React.Dispatch<React.SetStateAction<number>>,balance:number}) => {
    let transact:number =0;
    let newTransact:number = 0;
    let actual_arr = [0];
    // const dataArrIncomesum = dataArr.reduce((acc,curr)=>{ return (Number(acc)+Number(curr.income)) },0);
    // const dataArrExpenesum = dataArrexpense.reduce((acc,curr)=>{ return (Number(acc)+Number(curr.expense)) },0);
   
    const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {
      evt.persist();
  
    if((Number(formtransaction) < Number(formDataSavings))) {
      newTransact=Number(formtransaction)
      transact+=newTransact;
    }else{
      throw new Error("Cannot Transfer more than the available balance and set Savings has alaredy moved.")
    }
}
const handlesubmit  = (e:React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  setFormtransaction(e.target.value) 
}
return (
  <>
    <section className="main-section">
    <div className ="main-section-div">
      <h5>Savings Target</h5>
      <input type="text" name="setFormtransaction" onChange={(e)=>handlesubmit(e)} value={formtransaction}></input>
      <button onClick={(evt)=>submitData(evt)}>MOVE TO SAVINGS</button>
    </div>
   </section>
  </>
)
}

export default Transaction;