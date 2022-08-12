import React, { useEffect, useState } from 'react';

import BaseChart from './BaseChart';
import { ChartPropsInterface } from '../types';

const BarChart: React.FC<ChartPropsInterface> = (props) => {
  // state & props
  const { data, width = '754px', height = '336px', config } = props;
  const [option, setOption] = useState({});

  // redux hooks

  // other hooks
  useEffect(() => {
    setOption({
      xAxis: {
        type: 'category',
        data: config?.xLabel,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data,
          type: 'bar',
        },
      ],
    });
  }, [config]);

  // handles

  return (
    <div>
      <BaseChart option={option} width={width} height={height} />
    </div>
  );
};

export default BarChart;
