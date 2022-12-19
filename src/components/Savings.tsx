import React,{useState,useEffect}from 'react'

const getdataArr = () =>{
  let savings:string|0|null|undefined= localStorage.getItem('Savings')
  savings =savings??"";
  if(savings){
    return JSON.parse(savings)
  }
}
// setting savings amount
const Savings = ({setSavings,incomesum,expensesum}:{setSavings:React.Dispatch<any>,incomesum:Number,expensesum:Number}) => {
  const [formDataSavings,setFormDataSavings] = useState(getdataArr());
  const [income,setIncome] = useState<Number>(0);
  const [expense,setExpense] = useState<Number>(0);
  const setLocal = () =>{
    if((Number(income) - Number(expense) - Number(formDataSavings)) >0) {
      localStorage.setItem('Savings', JSON.stringify(formDataSavings));
    }
  }
  useEffect(()=>{
    console.log(incomesum)
    console.log(expensesum)
    setIncome(incomesum)
    setExpense(expensesum)
  },[])
    useEffect(()=>{
    console.log("Compontn Refreshed..")
    setLocal();
    setSavings(formDataSavings)
    setIncome(incomesum)
    setExpense(expensesum)
},[formDataSavings,incomesum,expensesum])
  const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.persist();
    console.log(formDataSavings)
    console.log(typeof(Number(incomesum) - Number(expensesum) - Number(formDataSavings)))
    console.log(typeof(0))
    if((Number(incomesum) - Number(expensesum) - Number(formDataSavings)) >0) {
      setFormDataSavings(formDataSavings)
    }else{
      setFormDataSavings(JSON.parse(localStorage.getItem('Savings') as string));
    }
  }
  const handlesubmit  = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const newValue:string = e.target.value;
    setFormDataSavings(newValue) 
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