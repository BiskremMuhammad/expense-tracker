export interface Expense {
  /**
   * the amount of money spend/recieved
   *
   * @type {number}
   * @memberof Expense
   */
  amount: number;

  /**
   * the date time of the expense
   *
   * @type {Date}
   * @memberof Expense
   */
  time: Date;

  /**
   * the description
   *
   * @type {string}
   * @memberof Expense
   */
  description: string;

  /**
   * the id of the expense item
   *
   * @type {string}
   * @memberof Expense
   */
  id: string;

  /**
   * the type of amount one of which is money in or money out
   *
   * @type {"IN" | "OUT"}
   * @memberof Expense
   */
  type: "IN" | "OUT";
}
