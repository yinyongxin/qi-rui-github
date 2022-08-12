import React, { useState } from 'react';

import { BarChart, LineChart, PieChart } from '@/components/PageCharts';
import { barChartConfig, lineChartConfig } from './config';

import styles from './styles.module.less';

const ZLCharts: React.FC = () => {
  // state & props
  const barData = [16, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42];
  const lineData = [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42];
  const pieData = [
    { value: 100, name: 'Search Engine' },
    { value: 735, name: 'Direct' },
    { value: 580, name: 'Email' },
    { value: 484, name: 'Union Ads' },
    { value: 300, name: 'Video Ads' },
  ];

  // handles
  const handleData = () => {};

  return (
    <div className={styles.charts}>
      <BarChart
        width="754px"
        height="336px"
        data={barData}
        config={barChartConfig}
      />
      <LineChart
        width="754px"
        height="336px"
        data={lineData}
        config={lineChartConfig}
      />
      <PieChart width="754px" height="336px" data={pieData} />
    </div>
  );
};

export default ZLCharts;
