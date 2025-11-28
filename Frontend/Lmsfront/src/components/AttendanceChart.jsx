import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const AttendanceChart = () => {
  const data = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        data: [80, 20],
        backgroundColor: ["#6A5AE0", "#E5E7EB"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%", // thickness
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex items-center justify-center font-bold text-xl">
          80%
        </div>
      </div>
      <p className="mt-2 text-sm text-gray-500">Attendance</p>
    </div>
  );
};

export default AttendanceChart;
