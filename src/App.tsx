import React, { useContext, useReducer } from "react";
import { AddExpense } from "./components/add-expense";
import { Balance } from "./components/balance";

import { Header } from "./components/header";
import { IncomeExpenses } from "./components/income-expenses";
import { Transactions } from "./components/transactions";
import { ExpensesContext, INITIAL_STATE } from "./context/context";
import { reducer } from "./reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  return (
    <ExpensesContext.Provider value={{ expenses: state.expenses, dispatch }}>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Transactions />
        <AddExpense />
      </div>
    </ExpensesContext.Provider>
  );
}

export default App;
