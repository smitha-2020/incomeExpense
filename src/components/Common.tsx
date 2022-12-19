export interface Common {
  title: { title: string };
}
export type formDataincome = {
  incomesource: number | string;
  income?: number | string;
  incomedate?: string;
};
export type FormDataincomeArr = {
  data: formDataincome[];
};
export type formDataexpense = {
  expensesource: number | string | readonly string[];
  expense?: number | string;
  expensedate?: string;
};
export type FormDataexpenseArr = {
  data: formDataincome[];
};
export type formDataSavings = {
  savings: number | string;
};
