import React from "react";
import { ExpenseProps } from "../components/Common";

const Expense = ({formDataexpense,setFormDataexpense,setDataArrexpense,dataArrexpense,dataArr}:ExpenseProps) => {
  const handlesubmit = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setFormDataexpense((prevVal) => ({ ...prevVal, [field]: e.target.value }));
  };
  const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.persist();
    const dataArrIncomesum = dataArr.reduce((acc,curr)=>{ return (Number(acc)+Number(curr.income)) },0);
    const dataArrExpenesum = dataArrexpense.reduce((acc,curr)=>{ return (Number(acc)+Number(curr.expense)) },0);
    if (!(formDataexpense.expensesource === "" || formDataexpense.expense === "" || formDataexpense.expensedate === "") && (dataArrIncomesum>0 && ((dataArrIncomesum-Number(formDataexpense.expense))>0))) {
      setDataArrexpense([...dataArrexpense, formDataexpense]);
      setFormDataexpense({ expensesource: "", expense: "", expensedate: "" });
    }else{
      throw new Error("You do not have sufficient Income")
    }
}
return (
  <>
    <section className="main-section">
      <div className="main-section-div">
        <h5>Add Expense</h5>
        <p><span>Expense Source</span><input type="text" name="incomesource" onChange={(e) => handlesubmit("expensesource", e)} value={formDataexpense.expensesource}></input></p>
        <p><span>Expense Amount</span><input type="text" name="income" onChange={(e) => handlesubmit("expense", e)} value={formDataexpense.expense} ></input></p>
        <p><span>Date of Expense</span><input type="date" name="incomedate" onChange={(e) => handlesubmit("expensedate", e)} value={formDataexpense.expensedate}></input></p>
        <p><span className=","></span></p>
        <button onClick={(evt) => submitData(evt)}>SAVE</button>
      </div>
    </section>
  </>
);

}

export default Expense;