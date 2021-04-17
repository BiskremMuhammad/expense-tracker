import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { ContextState, ExpensesContext } from "../context/context";
import { ActionTypes } from "../reducer/action-types";
import { Expense } from "../types/types";

export const AddExpense = () => {
  const [desc, setDesc] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [errors, setErrors] = useState<boolean>(false);

  const { dispatch } = useContext<ContextState>(ExpensesContext);

  const onAddTransaction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setErrors(false);
    if (!desc) {
      setErrors(true);
      return;
    }

    const cleanAmount: number = Number(parseFloat(amount).toFixed(2));

    // create an expense object to pass it to the reducer
    const newExpense: Expense = {
      id: uuid(),
      description: desc,
      amount: cleanAmount,
      time: new Date(),
    };

    dispatch({
      type: ActionTypes.ADD_EXPENSE,
      payload: newExpense,
    });
    setDesc("");
    setAmount("");
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form id="form">
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            placeholder="Enter text..."
            value={desc}
            style={{ borderColor: errors ? "red" : "#dedede" }}
            onChange={(v) => setDesc(v.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            placeholder="Enter amount..."
            value={amount}
            onChange={(v) => setAmount(v.target.value)}
          />
        </div>
        <button className="btn" onClick={onAddTransaction}>
          Add transaction
        </button>
      </form>
    </>
  );
};
