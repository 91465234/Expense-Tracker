# Personal Expense Tracker
A simple and responsive "React Application" that allows users to track their personal expenses.It supports adding,deleting, filtering expenses and persists data using localstorage.

## Live Demo
https://expense-track-ing.netlify.app/

## GitHub Repo Link
https://github.com/91465234/Expense-Tracker

## Features
- Add expenses with amount,category and date
- Input validation for empty or invalid values
- Display all expenses list
- Delete individual expenses
- View total expenses
- Filter expenses by category
- Data persistence using LocalStorage
- Responsive UI

## Tech Stack
- React
- Vite
- JavaScript
- Css(Flexbox & media queries)

## Project Structure
src/
┣ components/
┃ ┣ ExpenseForm.jsx
┃ ┣ ExpeneList.jsx
┃ ┣ ExpenseSummary.jsx
┃ ┗ Filter.jsx
┣ App.jsx
┣ App.css
┗ main.jsx

## Go to Project folder
cd expense-tack

## Install dependencies
npm install

## Start the App
npm run dev

## Build for production
npm run build

## Assumptions
- Categories are predefined and limited to Food, Travel, Shopping, and Other.
- Editing an existing expense is not included as it was not part of the core requirements.
- Currency is assumed to be INR (₹).
- The application is intended for single-user personal tracking.

