import React,{useEffect, useState} from 'react'
import { formDataincome,formDataexpense } from './components/Common';
import Income from './bankcomponents/Income';
import Expense from './bankcomponents/Expense';
import Savings from './bankcomponents/Savings';
import Transaction from './bankcomponents/Transaction';
import Header from './bankcomponents/Header';

const Main = () => {
    const [displayComponent, setDisplayComponent] = useState("Income");

    const [formDataincome,setFormData] = useState<formDataincome>({incomesource:"",income:"",incomedate:""});
    const [dataArr,setDataArr] = useState<formDataincome[]>([]);
    const [formDataexpense, setFormDataexpense] = useState<formDataexpense>({expensesource: "",expense: "",expensedate: ""})
    const [dataArrexpense, setDataArrexpense] = useState<formDataexpense[]>([]);
    const [formDataSavings,setFormDataSavings] = useState("");
    const [balance,setBalance] = useState(0);
    const [actualbalance,setActualbalance] = useState(0);
    const [formtransaction,setFormtransaction] = useState(0);

    useEffect(()=>{

      const dataArrIncomesum = dataArr.reduce((acc,curr)=>{ return (Number(acc)+Number(curr.income)) },0);
      const dataArrExpenesum = dataArrexpense.reduce((acc,curr)=>{ return (Number(acc)+Number(curr.expense)) },0);
      const balance = (dataArrIncomesum - dataArrExpenesum)
      if((balance-Number(formDataSavings))>=0){
        setBalance(dataArrIncomesum - dataArrExpenesum)
        setActualbalance((balance-Number(formDataSavings)))
      }
      if(balance-Number(formDataSavings)<=0){
        setFormDataSavings("");
        //alert("please set a new Savings Target")
      }
     
    },[dataArrexpense,dataArr,formDataSavings])
  

  return (
    <>
    <Header setDisplayComponent={setDisplayComponent}/>
 
    {displayComponent === "Income" && <Income formDataincome={formDataincome} setFormData={setFormData} setDataArr={setDataArr} dataArr={dataArr}/>}
    {displayComponent === "Expense" && <Expense formDataexpense={formDataexpense} setFormDataexpense={setFormDataexpense} setDataArrexpense={setDataArrexpense} dataArrexpense={dataArrexpense} dataArr={dataArr}/>}
    {displayComponent === "Savings" && (<Savings dataArrexpense={dataArrexpense} dataArr={dataArr} formDataSavings={formDataSavings} setFormDataSavings = {setFormDataSavings}/>)}
    {displayComponent === "Transaction" && (<Transaction formtransaction={formtransaction} formDataSavings={formDataSavings} setFormtransaction={setFormtransaction}  dataArrexpense={dataArrexpense} dataArr={dataArr} actualbalance={actualbalance} setActualbalance={setActualbalance} setBalance={setBalance} balance={balance}/>)}

    <div className="main-display">
        <ul className="main-display-data">
          {dataArr.map(({ incomesource, income, incomedate }) => (
            <li key={"income" + incomedate}>
              {incomesource}:{income}:{incomedate}
            </li>
          ))}
        </ul>
        <ul className="main-display-data">
          {dataArrexpense.map(({ expensesource, expense, expensedate }) => (
            <li key={"expense" + expensedate}>
              {expensesource}:{expense}:{expensedate}
            </li>
          ))}
        </ul>
        </div>
        <div className="main-display main-span">
        <span>Savings Target :</span>
        <span>{formDataSavings}</span>
      </div>
      <div className="main-display main-span">
        <span>Balance :</span>
        <span>{balance}</span>
      </div>
      <div className="main-display main-span">
        <span>Disposal Account :</span>
        <span>{actualbalance}</span>
      </div>

      <div className="main-display main-span">
        <span>Progress so far:</span>
        <span><progress id="file" value={formtransaction} max={formDataSavings}> {formtransaction}</progress></span>
      </div>
    </>
  )
}

export default Main