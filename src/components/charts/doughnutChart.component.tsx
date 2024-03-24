import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { VariousMetrics } from '../../types';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const,

    },
    title: {
      display: true,
      text: 'Various Metrics',
    },

  }
};

export default function DoughnutChart({ data }: { data: VariousMetrics[] }) {

  const pieData = {
    labels: [
      "Session Time",
      "Laytime",
      "Connection Time",
      "Transfer Time",
      "Dead Time",
      "Mooring Time",
      "Unmooring Time"
    ],
    datasets: [
      {
        label: "Time",
        data: data.map(element => Object.values(element)).flat(),
        backgroundColor: [
          '#f9f871',
          '#2bbeb2',
          '#815bb0',
          '#0097d5',
          '#91006c',
          '#96b1ad',
          '#00582a'
        ],
      }
    ],
  }

  return <Doughnut options={options} data={pieData} />;
}