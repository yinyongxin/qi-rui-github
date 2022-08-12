import React, { useEffect, useState } from 'react';

import BaseChart from './BaseChart';
import { ChartPropsInterface } from '../types';

const LineChart: React.FC<ChartPropsInterface> = (props) => {
  // state & props
  const { data, width = '745px', height = '336px', config } = props;
  const [option, setOption] = useState({});

  useEffect(() => {
    setOption({
      xAxis: {
        type: 'category',
        data: config?.xLabel,
        /* axisTick: {
          show: false,
        }, */
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed',
            // color: 'var(--design-neutral-color-5)',
          },
        },
      },
      series: [
        {
          data,
          type: 'line',
          itemStyle: {},
          // symbol: 'none',
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

export default LineChart;
