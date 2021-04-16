import { Expense } from "../types/types";

/**
 * defines the defferent types of actions
 */
export enum ActionTypes {
  ADD_EXPENSE = "ADD_EXPENSE",
  DELETE_EXPENSE = "DELETE_EXPENSE",
}

/**
 * interface that defines the Actions
 *
 * @interface
 * @exports
 */
export interface Actions {
  /**
   * the type of the action
   *
   * @type {ActionTypes}
   * @memberof Actions
   */
  type: ActionTypes;

  /**
   * Optional payload with the action,
   *  - Expense type when action is to add
   *  - String type when action is to delete, this will hold the expnese id
   *
   * @type {Expense | string}
   * @memberof Actions
   */
  payload?: Expense | string;
}
