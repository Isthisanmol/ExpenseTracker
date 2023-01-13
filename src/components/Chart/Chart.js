import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const numArr = props.dataPoint.map(dataPoint => dataPoint.value)
  const maximumHeight = Math.max(...numArr)
  return (
    <div className="chart">
      {
        props.dataPoint.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={maximumHeight}
            label={dataPoint.label}
          />
        ))
      }
    </div>
  );
};
export default Chart;
