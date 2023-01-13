import Chart from "../Chart/Chart"
const ExpensesChart = (props) => {
  const chartDataPoint = [
{label:"Jan" , value: 0},
{label:"Feb" , value: 0},
{label:"Mar" , value: 0},
{label:"Apr" , value: 0},
{label:"May" , value: 0},
{label:"June" , value: 0},
{label:"July" , value: 0},
{label:"Aug" , value: 0},
{label:"Sep" , value: 0},
{label:"Oct" , value: 0},
{label:"Nov" , value: 0},
{label:"Dec" , value: 0}];

for ( const expenseEntry of props.entry ){

const  currentMonth = expenseEntry.date.getMonth();
  //console.log( currentMonth)
 chartDataPoint[currentMonth].value += expenseEntry.amount
}

  return (
    <Chart dataPoint = {chartDataPoint}/>
  )
}
export default ExpensesChart
