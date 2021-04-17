import React, { createContext, Dispatch } from "react";
import { ActionTypes } from "../reducer/action-types";

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

  /**
   * to dispatch an action anywhere in the app
   *
   * @type {Dispatch<ActionTypes>}
   * @memberof ContextState
   */
  dispatch: Dispatch<ActionTypes>;
}

export const INITIAL_STATE: ContextState = {
  expenses: [],
  dispatch: () => null,
};

export const ExpensesContext = createContext<ContextState>(INITIAL_STATE);
