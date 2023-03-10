# Getting Started with React functional Components & React Hooks

This assignment requires also TypeScript when passing props to React Components

## Requirements

1. Create a simple one-page application to store incomes and expenses, and set
saving target.
2. Account balance can be calculated from incomes, expenses, and saving.
`incomes - expenses + saving = balance`
3. Users should be able to add new incomes, expenses, transfer from balance account to saving account, and reset saving target. Balance should never be negative number.
4. Use React Hooks where applicable. TypeScript must be used at least for the props types.
5. Decide your own styling (The image has no style)
6. Add function to transfer money back from saving account to current balance.
7. Set source of incomes and expenses as the select elements with the categories of your choice.



└───src
    │   App.css
    │   index.css
    │   index.tsx
    │   logo.svg
    │   Main.tsx
    │   react-app-env.d.ts
    │   reportWebVitals.ts
    │   setupTests.ts
    │
    ├───bankcomponents
    │       Expense.tsx
    │       Header.tsx
    │       Income.tsx
    │       Savings.tsx
    │       Transaction.tsx
    │
    ├───components
    │       Common.tsx
    │       ComponentDisplay.tsx
    │       Display.tsx

Deployed website:
    https://magical-churros-cc0164.netlify.app/
