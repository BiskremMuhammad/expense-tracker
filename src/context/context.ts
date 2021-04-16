import React, { createContext } from "react";

import { Expense } from "../types/types";

/**
 * interface that defines the state of the context
 *
 * @interface
 * @exports
 */
export interface ContextState {
  /**
   * the expenses array
   *
   * @type {Expense[]}
   * @memberof ContextState
   */
  expenses: Expense[];
}

export const INITIAL_STATE: ContextState = {
  expenses: [],
};

export const ExpensesContext = createContext<ContextState>(INITIAL_STATE);
