import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { DeadTime } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Vessel vs Average Dead Time per Berthing',
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 8
        }
      }
    }
  }
};

export default function SimpleBar({ data }: { data: DeadTime[] }) {

  const barData = {
    labels: data.map(element => element.VNAME),
    datasets: [
      {
        label: 'Average Dead Time Per Berthing',
        data: data.map(element => element.GenAvgDeadTimePerBerthing),
        backgroundColor: '#e38aeb'
      }
    ]
  }

  return (
    <>
      {barData && <Bar options={options} data={barData} />}
    </>
  )
}