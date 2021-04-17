import React, { useContext } from "react";
import { AddExpense } from "./components/add-expense";
import { Balance } from "./components/balance";

import { Header } from "./components/header";
import { IncomeExpenses } from "./components/income-expenses";
import { Transactions } from "./components/transactions";
import { ContextState, ExpensesContext } from "./context/context";

function App() {
  const { expenses, dispatch } = useContext<ContextState>(ExpensesContext);

  return (
    <ExpensesContext.Provider value={{ expenses, dispatch }}>
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
