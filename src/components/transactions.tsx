import React, { useContext } from "react";
import { ContextState, ExpensesContext } from "../context/context";
import { ActionTypes } from "../reducer/action-types";
import { Expense } from "../types/types";

export const Transactions = () => {
  const { expenses, dispatch } = useContext<ContextState>(ExpensesContext);

  const removeTransaction = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    itemId: string
  ) => {
    e.preventDefault();

    dispatch({
      type: ActionTypes.DELETE_EXPENSE,
      payload: itemId,
    });
  };
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {expenses.map((e: Expense, i: number) => (
          <li className={e.amount < 0 ? "minus" : "plus"}>
            {e.description}{" "}
            <span>
              {e.amount < 0 ? "-" : ""}${Math.abs(e.amount).toFixed(2)}
            </span>
            <button
              className="delete-btn"
              onClick={(event) => removeTransaction(event, e.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
