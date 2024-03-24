import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { BirthOccupancy } from '../../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 12
        }
      }
    }
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Date vs Daily Berth Occupancy',
    },
  },
};

export default function LineChart({ data }: { data: BirthOccupancy[] }) {

  const lineData = {
    labels: data.map(element => new Date(element.DT).toLocaleDateString()),
    datasets: [
      {
        label: 'Daily Berth Occupancy',
        data: data.map(element => element.AllBerths),
        borderColor: '#9f347d',
        backgroundColor: '#91006c',
      }
    ]
  }

  return (
    <Line options={options} data={lineData} />
  );
}