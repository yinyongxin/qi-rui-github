import React, { useEffect, useState } from 'react';

import BaseChart from './BaseChart';
import { ChartPropsInterface } from '../types';

const PieChart: React.FC<ChartPropsInterface> = (props) => {
  // state & props
  const { data, width = '754px', height = '336px', config } = props;
  const [option, setOption] = useState({});

  // other hooks
  useEffect(() => {
    setOption({
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '5%',
        left: 'center',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '40',
              fontWeight: 'bold',
            },
          },
          labelLine: {
            show: false,
          },
          data,
        },
      ],
    });
  }, [config]);
  return (
    <div>
      <BaseChart option={option} width={width} height={height} />
    </div>
  );
};

export default PieChart;
