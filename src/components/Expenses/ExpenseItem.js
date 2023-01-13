import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <ls>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">rs.{props.amount}</div>
      </div>
    </Card>
    </ls>
  );
}

export default ExpenseItem;
