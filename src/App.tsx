import { useState, useEffect } from 'react'
import Spinner from './components/spinner/spinner.component';
import { StackedBar, SimpleBar, LineChart, DoughnutChart } from './components/charts';
import { LayTime, DeadTime, BirthOccupancy, VariousMetrics } from './types';
import getLaytime from './services/getLaytime';
import getDeadTime from './services/getDeadTime';
import getBirthOccupancy from './services/getBirthOccupancy';
import getVariousMetrics from './services/getVariousMetrics';

function App() {

  const [laytimeData, setLaytimeData] = useState<LayTime[]>([]);
  const [deadTimeData, setDeadTimeData] = useState<DeadTime[]>([]);
  const [birthData, setBirthData] = useState<BirthOccupancy[]>([]);
  const [variousMetrics, setVariousMetrics] = useState<VariousMetrics[]>([]);

  async function getData() {
    setLaytimeData(await getLaytime());
    setDeadTimeData(await getDeadTime());
    setBirthData(await getBirthOccupancy());
    setVariousMetrics(await getVariousMetrics());
  }

  function validateFields() {
    if (
      laytimeData.length > 0 &&
      deadTimeData.length > 0 &&
      birthData.length > 0 &&
      variousMetrics.length > 0) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='bg-slate-200'>
      <div className='h-screen lg:w-10/12 content-center md:m-auto '>
        <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-2 rounded-md bg-slate-50 p-0 m-0 lg:px-5 lg:py-3'> 
          <div className='text-center lg:text-left lg:col-start-1 lg:col-end-3'>
            <p className='text-3xl text-slate-700 font-semibold'>Simple Dashboard</p>
          </div>
          {validateFields() ?
            <>
              <div className='w-96 h-60 md:h-full md:w-full'>
                <StackedBar data={laytimeData} />
              </div>
              <div>
                <SimpleBar data={deadTimeData} />
              </div>
              <div className='w-96 md:w-full'>
                <LineChart data={birthData} />
              </div>
              <div className='size-80 md:size-96 justify-self-center'>
                <DoughnutChart data={variousMetrics} />
              </div>
            </>
            :
            <div className="md:col-start-1 md:col-end-3 content-center justify-self-center h-screen md:h-[75vh]">
              <Spinner />
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default App;
