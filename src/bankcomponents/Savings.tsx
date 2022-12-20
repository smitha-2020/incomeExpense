import React from 'react'
import { SavingsProps } from '../components/Common';

const Savings = ({dataArrexpense,dataArr,formDataSavings,setFormDataSavings}:SavingsProps) => {
  const dataArrIncomesum = dataArr.reduce((acc,curr)=>{ return (Number(acc)+Number(curr.income)) },0);
  const dataArrExpenesum = dataArrexpense.reduce((acc,curr)=>{ return (Number(acc)+Number(curr.expense)) },0);
  const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.persist();
    if((Number(dataArrIncomesum) - Number(dataArrExpenesum) - Number(formDataSavings)) >0) {
      setFormDataSavings(formDataSavings)
      alert("Savings Target Set")
    }else{
      setFormDataSavings("")
      throw new Error("Savings cannot be more than  balance amount")
    }
  }
  const handlesubmit  = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormDataSavings(e.target.value) 
  }
  return (
    <>
      <section className="main-section">
      <div className ="main-section-div">
        <h5>Savings Target</h5>
        <input type="text" name="savings" onChange={(e)=>handlesubmit(e)} value={formDataSavings}></input>
        <button onClick={(evt)=>submitData(evt)}>SAVE</button>
      </div>
     </section>
    </>
  )
}

export default Savings