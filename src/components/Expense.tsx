import React, { useState, useEffect } from "react";
import { formDataexpense } from "./Common";
//Logic for persistant storage
// getLocalStoragedata
const getdataArr = () => {
  let expense: string | 0 | null | undefined = localStorage.getItem("expenses");
  expense = expense ?? "";
  if (expense) {
    return JSON.parse(expense) ?? [];
  }
};
// Keeping track of monthly expenses
const Expense = ({
  setExpense,
}: {
  setExpense: React.Dispatch<React.SetStateAction<formDataexpense[]>>;
}) => {
  const [formDataexpense, setFormDataexpense] = useState<formDataexpense>({
    expensesource: "",
    expense: "",
    expensedate: "",
  });
  const [dataArrexpense, setDataArrexpense] = useState<formDataexpense[]>(
    getdataArr()
  );
  useEffect(() => {
    console.log("Compontn Refreshed..");
    localStorage.setItem("expenses", JSON.stringify(dataArrexpense));
    setExpense(dataArrexpense);
  }, [dataArrexpense]);
  const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.persist();
    if (
      !(
        formDataexpense.expensesource === "" ||
        formDataexpense.expense === "" ||
        formDataexpense.expensedate === ""
      )
    ) {
      setDataArrexpense([...dataArrexpense, formDataexpense]);
      setFormDataexpense({ expensesource: "", expense: "", expensedate: "" });
    }
  };
  const handlesubmit = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setFormDataexpense((prevVal) => ({ ...prevVal, [field]: e.target.value }));
  };
  return (
    <>
      <section className="main-section">
        <div className="main-section-div">
          <h5>Add Expense</h5>
          <p>
            {" "}
            <span>Expense Source</span>{" "}
            <input
              type="text"
              name="incomesource"
              onChange={(e) => handlesubmit("expensesource", e)}
              value={formDataexpense.expensesource}
            ></input>
          </p>
          <p>
            {" "}
            <span>Expense Amount</span>{" "}
            <input
              type="text"
              name="income"
              onChange={(e) => handlesubmit("expense", e)}
              value={formDataexpense.expense}
            ></input>
          </p>
          <p>
            {" "}
            <span>Date of Expense</span>{" "}
            <input
              type="date"
              name="incomedate"
              onChange={(e) => handlesubmit("expensedate", e)}
              value={formDataexpense.expensedate}
            ></input>
          </p>
          <p>
            <span className=","></span>
          </p>
          <button onClick={(evt) => submitData(evt)}>SAVE</button>
        </div>
      </section>
    </>
  );
};

export default Expense;
