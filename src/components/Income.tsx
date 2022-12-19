import React, {  useEffect, useState } from 'react'
import { formDataincome } from './Common';

// getLocalStoragedata
const getdataArr = () =>{
  let income:string|0|null|undefined= localStorage.getItem('incomes')
  income =income??"";
  if(income){
    return JSON.parse(income)??[]
  }
}
// Keeping track of income
const Income = ({setIncome}:{setIncome:React.Dispatch<React.SetStateAction<formDataincome[]>>}) => {
  const [formDataincome,setFormData] = useState<formDataincome>({incomesource:"",income:"",incomedate:""});
  const [dataArr,setDataArr] = useState<formDataincome[]>(getdataArr());
  useEffect(()=>{
      console.log("Compontn Refreshed..")
      localStorage.setItem('incomes', JSON.stringify(dataArr));
      setIncome(dataArr);
      console.log(dataArr)
  },[dataArr])
  const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.persist();
    if(!(formDataincome.incomesource === "" || formDataincome.income === ""|| formDataincome.incomedate === "")){
      setDataArr([...dataArr,formDataincome]);
      console.log(dataArr);
      setFormData({incomesource:"",income:"",incomedate:""});
    }
  }
  const handlesubmit  = (field:string,e:React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setFormData((prevVal)=>({...prevVal, [field]: e.target.value }));
  }
  return (
    <>
      <section className="main-section">
      <div className ="main-section-div">
        <h5>Add Income</h5>
        <p> <span>Income Source</span> <input type="text" name="incomesource" onChange={(e)=>handlesubmit('incomesource',e)} value={formDataincome.incomesource}></input></p>
        <p> <span>Income Amount</span> <input type="text" name="income" onChange={(e) =>handlesubmit('income',e)} value={formDataincome.income}></input></p>
        <p> <span>Date of Income</span> <input type="date" name="incomedate" onChange={(e) =>handlesubmit('incomedate',e)} value={formDataincome.incomedate}></input></p>
        <p><span className=','></span></p>
        <button onClick={(evt)=>submitData(evt)}>SAVE</button>
        </div>
      </section>
     
    </>
  ); 
}

export default Income;