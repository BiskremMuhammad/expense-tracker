import React, { useContext } from "react";
import { ContextState, ExpensesContext } from "../context/context";
import { Expense } from "../types/types";

export const Balance = () => {
  const { expenses } = useContext<ContextState>(ExpensesContext);
  const balance: number = !expenses.length
    ? 0
    : expenses.length === 1
    ? expenses[0].amount
    : expenses.reduce<number>((a, b) => a + b.amount, 0);

  console.log("re-rendered balance with transactions: ", expenses);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${balance.toFixed(2)}</h1>
    </>
  );
};
