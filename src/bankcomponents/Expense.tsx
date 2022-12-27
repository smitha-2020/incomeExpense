import React from "react";
import { ExpenseProps } from "../components/Common";
import uuid4 from "uuid4";

const Expense = ({
  formDataexpense,
  setFormDataexpense,
  setDataArrexpense,
  dataArrexpense,
  dataArr,
}: ExpenseProps) => {

  const arrExpenseSource = ["", "rent", "fees", "grocery", "shopping", "restaurent", "other"]
  const handlesubmit = (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    setFormDataexpense((prevVal) => ({ ...prevVal, [field]: e.target.value }));
  };
  const submitData = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.persist();
    const dataArrExpenesum = dataArrexpense.reduce((acc, curr) => { return (Number(acc) + Number(curr.expense)) }, 0);
    const dataArrIncomesum = dataArr.reduce((acc, curr) => {
      return Number(acc) + Number(curr.income);
    }, 0);
    if (
      !(
        formDataexpense.expensesource === "" ||
        formDataexpense.expense === "" ||
        formDataexpense.expensedate === ""
      ) &&
      dataArrIncomesum > 0 &&
      dataArrIncomesum - (dataArrExpenesum + Number(formDataexpense.expense)) >= 0
    ) {
      formDataexpense.expenseid = uuid4();
      setDataArrexpense([...dataArrexpense, formDataexpense]);
      setFormDataexpense({ expenseid: "", expensesource: "", expense: "", expensedate: "" });
    } else {
      throw new Error("You do not have sufficient Income");
    }
  };
  const selectSubmit = (field: string, evt: React.ChangeEvent<HTMLSelectElement>) => {
    evt.preventDefault();
    setFormDataexpense((prevVal) => ({ ...prevVal, [field]: evt.target.value }));
  }
  return (
    <>
      <section className="main-section">
        <div className="main-section-div">
          <h5>Add Expense</h5>
          <p><span>Income Source</span>
            <select onChange={(evt) => selectSubmit('expensesource', evt)} name="incomesource" value={formDataexpense.expensesource}>
              {arrExpenseSource.map((src) => <option value={src}>{src}</option>)}

            </select>
          </p>
          <p>
            <span>Expense Amount</span>
            <input
              type="text"
              name="income"
              onChange={(e) => handlesubmit("expense", e)}
              value={formDataexpense.expense}
            ></input>
          </p>
          <p>
            <span>Date of Expense</span>
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
