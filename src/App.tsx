import React, {  useState } from 'react';
import Header from './components/Header';
import { FormData } from './components/Common';




function MainComponent(){
  const [formData,setFormData] = useState<FormData>({incomes:"",expenses:"",incomedate:""});
  const [dataArr,setDataArr] = useState<FormData[]>([]);

  const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {

    setDataArr((prevFormData) => ([...prevFormData,formData]))
    //localStorage.setItem("income", JSON.stringify(dataArr));
    console.log(dataArr) 
  }


  const handlesubmit  = (field:string,e:React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
     //const {incomes,expenses,incomedate}=e.target;
      setFormData((prevVal)=>({...prevVal, [field]: e.target.value }));

  }
 
  return (
    <section className="main-div">
    {/* <form> */}
    <div>
      <h5>Add Income</h5>
      <p> <span>Income Source</span> <input type="text" name="incomes" onChange={(e)=>handlesubmit('incomes',e)} value={formData.incomes}></input></p>
      <p> <span>Income Amount</span> <input type="text" name="expenses" onChange={(e) =>handlesubmit('expenses',e)} value={formData.expenses}></input></p>
      <p> <span>Date of Income</span> <input type="date" name="incomedate" onChange={(e) =>handlesubmit('incomedate',e)} value={formData.incomedate}></input></p>
      <p><span className=','></span></p>
      <button onClick={submitData}>SAVE</button>
      </div>
    {/* </form> */}
    </section>
    
  ); 
}
function App() {
  return (
    <>
    <Header/>
    <MainComponent/>

    </>
  );
}

export default App;

