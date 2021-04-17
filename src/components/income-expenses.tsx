import React, { useContext } from "react";

import { ContextState, ExpensesContext } from "../context/context";
import { Expense } from "../types/types";

export const IncomeExpenses = () => {
  const { expenses } = useContext<ContextState>(ExpensesContext);
  const income: number = !expenses.length
    ? 0
    : expenses.length === 1
    ? expenses[0].amount > 0
      ? expenses[0].amount
      : 0
    : expenses.reduce<number>((a, b) => (a + b.amount > 0 ? b.amount : 0), 0);

  const expense: number = !expenses.length
    ? 0
    : expenses.length === 1
    ? expenses[0].amount < 0
      ? expenses[0].amount
      : 0
    : expenses.reduce<number>((a, b) => (a + b.amount < 0 ? b.amount : 0), 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income.toFixed(2)}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${(expense * -1).toFixed(2)}
        </p>
      </div>
    </div>
  );
};
