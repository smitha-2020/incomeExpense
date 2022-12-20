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
export type IncomeProp={
  formDataincome:formDataincome,
  setFormData:React.Dispatch<React.SetStateAction<formDataincome>>,
  setDataArr:React.Dispatch<React.SetStateAction<formDataincome[]>>,
  dataArr:formDataincome[]
};
export type ExpenseProps={
formDataexpense:formDataexpense,
setFormDataexpense: React.Dispatch<React.SetStateAction<formDataexpense>>,
setDataArrexpense:React.Dispatch<React.SetStateAction<formDataexpense[]>>,
dataArrexpense:formDataexpense[],
dataArr:formDataincome[]
};
export type SavingsProps={
  dataArrexpense:formDataexpense[],
  dataArr:formDataincome[],
  formDataSavings:string,
  setFormDataSavings:React.Dispatch<React.SetStateAction<string>>
};
