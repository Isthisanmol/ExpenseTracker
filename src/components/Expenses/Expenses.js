import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses (props) {
  const [filteredYear, setFilteredYear] = useState("2022");
  //vhjvhhjmv

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses-wrapper">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
<ExpensesChart entry={filteredExpenses}/>
      <ExpenseList data={filteredExpenses} />

    </Card>
  );
}
export default Expenses;
