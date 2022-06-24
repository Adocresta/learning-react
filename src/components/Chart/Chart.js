import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const sumAll = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
    return sum;
  };
  const { dataPoints } = props;
  const { selectedYear } = props;
  const dataPointsTotalValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = sumAll(dataPointsTotalValues);

  return (
    <div>
      <h2>
        Total Spending in {selectedYear}: ${totalMaximum}{" "}
      </h2>
      <div className="chart">
        {dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaximum}
            label={dataPoint.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Chart;
