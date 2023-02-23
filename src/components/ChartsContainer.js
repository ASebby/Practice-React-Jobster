import { useState } from 'react';
import { useSelector } from 'react-redux';
import BarChart from './BarChart';
import AreaChartComponent from './AreaChart';
import Wrapper from '../assets/wrappers/ChartsContainer';

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(false);
  const { monthlyApplications: data } = useSelector((store) => store.allJobs);

  const toggleChart = () => {
    setBarChart(!barChart);
  };

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={toggleChart}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChartComponent data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
