import React, { useState } from 'react';

import MyChart from '@/components/Charts';
import {
  lineChartsConfig,
  linesChartsConfig,
  lineBarChartsConfig,
  barChartsConfig,
} from './config';

import styles from './styles.module.less';

const ZLCharts: React.FC = () => {
  // state & props
  const [lineData, setLineData] = useState([
    [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
  ]);
  const [linesData, setLinesData] = useState([
    [13, 21, 11, 17, 21, 14, 17, 5, 18, 10, 17, 11],
    [32, 48, 25, 38, 48, 32, 39, 15, 40, 28, 36, 25],
  ]);
  const [barData, setBarData] = useState([
    [36, 32, 25, 33],
    [23, 34, 15, 28],
    [35, 32, 35, 38],
    [40, 42, 40, 40],
  ]);
  const [lineBarData, setLineBarData] = useState([
    [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
    [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
  ]);

  // handles

  return (
    <div className={styles.charts}>
      <MyChart data={lineData} chartsConfig={lineChartsConfig} />
      <MyChart data={linesData} chartsConfig={linesChartsConfig} />
      <MyChart data={barData} chartsConfig={barChartsConfig} />
      <MyChart data={lineBarData} chartsConfig={lineBarChartsConfig} />
    </div>
  );
};

export default ZLCharts;
