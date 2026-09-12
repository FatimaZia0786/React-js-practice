import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Chart } from "react-chartjs-2"; 
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);


function AttendanceChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        type: "bar",
        label: "Attendance Count",
        data: [180, 170, 190, 200, 178, 160, 185],
        backgroundColor: "rgba(54, 162, 235, 0.6)", // Blue bars
      },
      {
        type: "line",
        label: "Trend",
        data: [180, 170, 190, 200, 178, 160, 185],
        borderColor: "green",
        backgroundColor: "green",
      },
    ],
  };

  const options = {scales:{
      y: { beginAtZero: true },}
  };

  return(
  <div style={{ width: "50%", padding: "20px", margin:"auto" }}>
  <Chart type="bar" data={data} options={options} />
  </div>
    );
}
export default AttendanceChart;