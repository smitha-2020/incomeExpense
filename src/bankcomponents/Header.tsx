import React from "react";
import { Iheader } from "../components/Common";

const Header = ({ setDisplayComponent }: Iheader) => {
  const changeState = (
    option: string,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setDisplayComponent(option);
  };
  return (
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
        <li onClick={(e) => changeState("Transaction", e)}>
          <a href="#">Transaction</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
