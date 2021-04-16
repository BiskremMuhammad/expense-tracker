import React, { useContext } from "react";
import { ContextState, ExpensesContext } from "./context/context";
import { Expense } from "./types/types";

function App() {
  const expenses = useContext<ContextState>(ExpensesContext);

  return (
    <ExpensesContext.Provider value={expenses}>
      <div className="App"></div>
    </ExpensesContext.Provider>
  );
}

export default App;
