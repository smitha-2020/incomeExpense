import React, { useEffect, useState, useRef } from "react";

import { formDataincome, formDataexpense } from "./components/Common";
import Income from "./bankcomponents/Income";
import Expense from "./bankcomponents/Expense";
import Savings from "./bankcomponents/Savings";
import Transaction from "./bankcomponents/Transaction";
import Header from "./bankcomponents/Header";
import Display from "./components/Display";
import ComponentDisplay from "./components/ComponentDisplay";

const Main = () => {
  const [displayComponent, setDisplayComponent] = useState("Income");
  const [formDataincome, setFormData] = useState<formDataincome>({
    incomeid: "",
    incomesource: "",
    income: "",
    incomedate: "",
  });
  const [dataArr, setDataArr] = useState<formDataincome[]>([]);
  const [formDataexpense, setFormDataexpense] = useState<formDataexpense>({
    expenseid: "",
    expensesource: "",
    expense: "",
    expensedate: "",
  });
  const [dataArrexpense, setDataArrexpense] = useState<formDataexpense[]>([]);
  const [formDataSavings, setFormDataSavings] = useState("");
  const [balance, setBalance] = useState(0);
  const [actualbalance, setActualbalance] = useState(0);
  useEffect(() => {
    const dataArrIncomesum = dataArr.reduce((acc, curr) => {
      return Number(acc) + Number(curr.income);
    }, 0);
    const dataArrExpenesum = dataArrexpense.reduce((acc, curr) => {
      return Number(acc) + Number(curr.expense);
    }, 0);
    const balance = dataArrIncomesum - dataArrExpenesum;
    if (balance - Number(formDataSavings) >= 0) {
      setBalance(dataArrIncomesum - dataArrExpenesum);
      setActualbalance(balance - Number(formDataSavings));
    }
    if (balance - Number(formDataSavings) <= 0) {
      setFormDataSavings("");
    }
  }, [dataArrexpense, dataArr, formDataSavings]);
  return (
    <>
      <Header setDisplayComponent={setDisplayComponent} />
      {/* displaying component based on the component clicked */}
      {displayComponent === "Income" && (
        <Income
          formDataincome={formDataincome}
          setFormData={setFormData}
          setDataArr={setDataArr}
          dataArr={dataArr}
        />
      )}
      {displayComponent === "Expense" && (
        <Expense
          formDataexpense={formDataexpense}
          setFormDataexpense={setFormDataexpense}
          setDataArrexpense={setDataArrexpense}
          dataArrexpense={dataArrexpense}
          dataArr={dataArr}
        />
      )}
      {displayComponent === "Savings" && (
        <Savings
          dataArrexpense={dataArrexpense}
          dataArr={dataArr}
          formDataSavings={formDataSavings}
          setFormDataSavings={setFormDataSavings}
        />
      )}
      {displayComponent === "Transaction" && (
        <Transaction
          formDataSavings={formDataSavings}
          setBalance={setBalance}
          balance={balance}
          actualbalance={actualbalance}
        />
      )}
      <div className="main-display">
        <Display dataArr={dataArr} />
        <ul className="main-display-data">
          {dataArrexpense.map(({ expenseid, expensesource, expense, expensedate }) => (
            <li key={expenseid}>
              {expensesource}:{expense}:{expensedate}
            </li>
          ))}
        </ul>
      </div>
      <ComponentDisplay title="Savings Target:" data={formDataSavings} />
      <ComponentDisplay title="Balance:" data={balance} />
      <ComponentDisplay title="Disposal Account:" data={actualbalance} />
    </>
  );
};

export default Main;
