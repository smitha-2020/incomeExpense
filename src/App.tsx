import React, { useEffect, useState } from "react";

import Income from "./components/Income";
import Expense from "./components/Expense";
import Savings from "./components/Savings";
import { formDataincome, formDataexpense } from "./components/Common";

// getLocalStoragedata
const getdataArrincome = () => {
  let income: string | 0 | null | undefined = localStorage.getItem("incomes");
  income = income ?? "";
  if (income) {
    return JSON.parse(income);
  }
};
const getdataArrexpense = () => {
  let expense: string | 0 | null | undefined = localStorage.getItem("expenses");
  expense = expense ?? "";
  if (expense) {
    return JSON.parse(expense);
  }
};
const getSavings = () => {
  let savings: string | 0 | null | undefined = localStorage.getItem("Savings");
  savings = savings ?? "";
  if (savings) {
    return JSON.parse(savings);
  }
};
function MainComponent() {
  const [displayComponent, setDisplayComponent] = useState("Income");
  const [income, setIncome] = useState<formDataincome[]>(getdataArrincome());
  const [expense, setExpense] = useState<formDataexpense[]>(
    getdataArrexpense()
  );
  const [balance, setBalance] = useState(0);
  const [balanceAcc, setBalanceAcc] = useState(0);
  const [savings, setSavings] = useState(getSavings());
  let incomesum = 0;
  let expensesum = 0;
  useEffect(() => {
    //Logic when page is loaded for first time
    incomesum = 0;
    expensesum = 0;
    setBalance(0);
    incomesumfunc();
    expenesumfunc();
    calcBalanceacc();
    calcBalance();
  }, []);
  useEffect(() => {
    //Logic to calculate balance
    incomesum = 0;
    expensesum = 0;
    setBalance(0);
    incomesumfunc();
    expenesumfunc();
    calcBalanceacc();
    calcBalance();
  }, [income, expense, savings]);
  const incomesumfunc = () => {
    income.map((incomeobj) => {
      incomesum += Number(incomeobj.income);
    });
    return incomesum;
  };
  const expenesumfunc = () => {
    expense.map((expenseobj) => {
      expensesum += Number(expenseobj.expense);
    });
    return expensesum;
  };
  const calcBalance = () => {
    setBalance(incomesum - expensesum + parseInt(savings));
  };
  const calcBalanceacc = () => {
    setBalanceAcc(incomesum - expensesum - parseInt(savings));
  };
  const changeState = (
    option: string,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setDisplayComponent(option);
  };
  return (
    <>
      <header>
        <ul className="main-header">
          <li onClick={(e) => changeState("Income", e)}>
            <a href="#">Income</a>
          </li>
          <li onClick={(e) => changeState("Expense", e)}>
            <a href="#">Expense</a>
          </li>
          <li onClick={(e) => changeState("Savings", e)}>
            <a href="#">Sav.Target</a>
          </li>
        </ul>
      </header>
      {displayComponent === "Income" && <Income setIncome={setIncome} />}
      {displayComponent === "Expense" && <Expense setExpense={setExpense} />}
      {displayComponent === "Savings" && (
        <Savings
          setSavings={setSavings}
          incomesum={incomesumfunc()}
          expensesum={expenesumfunc()}
        />
      )}
      <div className="main-display">
        <ul className="main-display-data">
          {income.map(({ incomesource, income, incomedate }) => (
            <li key={"income" + incomedate}>
              {incomesource}:{income}:{incomedate}
            </li>
          ))}
        </ul>
        <ul className="main-display-data">
          {expense.map(({ expensesource, expense, expensedate }) => (
            <li key={"expense" + expensedate}>
              {expensesource}:{expense}:{expensedate}
            </li>
          ))}
        </ul>
      </div>
      <div className="main-display main-span">
        <span>Savings Target :</span>
        <span>{savings}</span>
      </div>
      <div className="main-display main-span">
        <span>Balance :</span>
        <span>{balance}</span>
      </div>
      <div className="main-display main-span">
        <span>Balance Account :</span>
        <span>{balanceAcc}</span>
      </div>
      <div className="main-display main-span">
        <span>Savings Account :</span>
        <span>{savings}</span>
      </div>
    </>
  );
}
function App() {
  return (
    <>
      <MainComponent />
    </>
  );
}

export default App;
