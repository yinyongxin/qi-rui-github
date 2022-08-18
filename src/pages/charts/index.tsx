import React, { useEffect, useRef, useState } from 'react';

import {
  LineChart,
  BarChart,
  PieChart,
  BarLineChart,
} from '@/components/PageCharts';
import {
  lineChartConfig,
  lineAreaChartConfig,
  barChartConfig,
  barStackChartConfig,
  pieChartConfig,
  barStripChartConfig,
  barStripStackChartConfig,
  barLineChartConfig,
} from './config';
import { IRefInterface } from '@/components/PageCharts/types';

import styles from './styles.module.less';

const ZLCharts: React.FC = () => {
  // state & props
  const barData = [
    [36, 32, 25, 33],
    [23, 34, 15, 28],
    [35, 32, 35, 38],
    [40, 42, 40, 40],
  ];
  const barStackData = [
    [18, 12, 10, 15],
    [28, 15, 20, 30],
    [34, 18, 25, 32],
    [40, 30, 30, 40],
  ];
  const barStripData = [[280, 110, 94, 46, 36, 22]];
  const barStripStackData = [
    [14, 15, 16, 17, 18, 19],
    [36, 27, 38, 39, 40, 41],
    [86, 87, 88, 89, 90, 91],
    [246, 250, 260, 265, 270, 300],
  ];

  const lineData = [[36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42]];
  const lineAreaData = [
    [13, 21, 11, 17, 21, 14, 17, 5, 18, 10, 17, 11],
    [32, 48, 25, 38, 48, 32, 39, 15, 40, 28, 36, 25],
  ];

  const pieData = [
    { value: 1048, name: '模块一' },
    { value: 735, name: '模块二' },
    { value: 580, name: '模块三' },
    { value: 484, name: '模块四' },
  ];

  const barLineData = [
    [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
    [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
  ];

  // other hooks
  const barRef = useRef<IRefInterface>(null);
  const lineRef = useRef<IRefInterface>(null);
  const pieRef = useRef<IRefInterface>(null);
  const barLineRef = useRef<IRefInterface>(null);

  // handles
  const handleClick = (e: any) => {
    console.log(e);
  };

  /* useEffect(() => {
    console.log(barRef.current?.refresh());
  }, []); */
  /* useEffect(() => {
    console.log(lineRef.current?.refresh());
  }, []); */
  useEffect(() => {
    console.log(barLineRef.current?.refresh());
  }, []);

  return (
    <div className={styles.charts}>
      <BarChart
        width="40%"
        height="336px"
        data={[[10, 12, 23, 45, 24, 11, 12, 34, 45, 12, 34, 45]]}
        config={barChartConfig}
      />
      <BarLineChart
        width="40%"
        height="336px"
        data={[
          [38, 32, 25, 33, 40, 35, 10, 22, 31, 32, 38, 42],
          [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
        ]}
        config={barLineChartConfig}
        ref={barLineRef}
      />
      <BarChart
        width="40%"
        height="336px"
        data={async () => {
          let res = await [
            [36, 32, 25, 33],
            [23, 34, 15, 28],
            [35, 32, 35, 38],
            [40, 42, 40, 40],
          ];
          return res;
        }}
        config={barChartConfig}
        onClick={handleClick}
        ref={barRef}
      />
      <LineChart
        width="754px"
        height="336px"
        data={async () => {
          let res = await [[36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42]];
          return res;
        }}
        config={lineChartConfig}
        ref={lineRef}
      />
      <PieChart
        width="754px"
        height="336px"
        data={async () => {
          let res = await [
            { value: 1048, name: '模块一' },
            { value: 735, name: '模块二' },
            { value: 580, name: '模块三' },
            { value: 484, name: '模块四' },
          ];
          return res;
        }}
        config={pieChartConfig}
        ref={pieRef}
      />

      <BarChart
        width="40%"
        height="336px"
        data={barData}
        config={barChartConfig}
        onClick={handleClick}
      />
      <BarChart
        width="40%"
        height="336px"
        data={barStackData}
        config={barStackChartConfig}
        onClick={handleClick}
      />
      <BarChart
        width="40%"
        height="336px"
        data={barStripData}
        config={barStripChartConfig}
        onClick={handleClick}
      />
      <BarChart
        width="40%"
        height="336px"
        data={barStripStackData}
        config={barStripStackChartConfig}
        onClick={handleClick}
      />

      <LineChart
        width="754px"
        height="336px"
        data={lineData}
        config={lineChartConfig}
      />
      <LineChart
        width="754px"
        height="336px"
        data={lineAreaData}
        config={lineAreaChartConfig}
      />

      <PieChart
        width="754px"
        height="336px"
        data={pieData}
        config={pieChartConfig}
      />

      <BarLineChart
        width="40%"
        height="336px"
        data={barLineData}
        config={barLineChartConfig}
      />
    </div>
  );
};

export default ZLCharts;
