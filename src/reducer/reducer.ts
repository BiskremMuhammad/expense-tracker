import { ContextState, INITIAL_STATE } from "../context/context";
import { Expense } from "../types/types";
import { Actions, ActionTypes } from "./action-types";

export const reducer = (
  state: ContextState = INITIAL_STATE,
  action: Actions
) => {
  switch (action.type) {
    case ActionTypes.ADD_EXPENSE:
      return state.expenses.concat(action.payload as Expense);

    case ActionTypes.DELETE_EXPENSE:
      return state.expenses.filter((e) => e.id !== action.payload);

    default:
      return state;
  }
};
