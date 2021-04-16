import React, { useContext } from "react";

import { Header } from "./components/header";
import { ContextState, ExpensesContext } from "./context/context";

function App() {
  const expenses = useContext<ContextState>(ExpensesContext);

  return (
    <ExpensesContext.Provider value={expenses}>
      <div className="container">
        <Header />
      </div>
    </ExpensesContext.Provider>
  );
}

export default App;
