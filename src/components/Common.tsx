import React from 'react'

export interface Common{
    title:{title:string}
}
export type FormData = {
    incomes:number|string|readonly string[]
    expenses?:number|string|readonly string[]
    incomedate?:string;
  }