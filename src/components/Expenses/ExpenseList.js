import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
const ExpenseList = props  => {


if (props.data.length === 0) {
  return (
    <h2 className = "expenses-list__fallback">Found no Expenses</h2>
  )
}

return(
  <ul className ="expenses-list">

  {props.data.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
      />
    ))}
  </ul>
);

};


export default ExpenseList;
