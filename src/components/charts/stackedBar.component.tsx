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
import { LayTime } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Vessel vs Average lay time and total lay time',
    },
  },
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    x: {
      stacked: true,
      ticks: {
        font: {
          size: 10
        }
      }
    },
    y: {
      stacked: true,
      
    },
  },
};

export default function StackedBar({ data }: { data: LayTime[] }) {

  const barData = {
    labels: data.map(element => element.Vessel),
    datasets: [
      {
        label: 'Average Lay Time',
        data: data.map(element => element.AvgLaytime),
        backgroundColor: '#2bbeb2'
      },
      {
        label: 'Total Lay Time',
        data: data.map(element => element.TotalLaytime),
        backgroundColor: '#c1fcf4'
      }
    ]
  }

  return (
    <>
      {barData && <Bar options={options} data={barData} />}
    </>
  )
}