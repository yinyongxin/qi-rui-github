import React, { useEffect, useRef, useState } from 'react';

import {
  LineChart,
  BarChart,
  PieChart,
  BarLineChart,
} from '@/components/PageCharts';
import {
  barChartConfig,
  barChart2Config,
  barChart3Config,
  barChart4Config,
  barChart5Config,
  lineChartConfig,
  lineChart2Config,
  lineChart3Config,
  lineChart4Config,
  pieChartConfig,
  barLineChartConfig,
  barLineChart2Config,
} from './config';
import { IRefInterface } from '@/components/PageCharts/types';
import { BASE_URL } from '@/config';

import styles from './styles.module.less';

const ZLCharts: React.FC = () => {
  // state & props
  const barData = [[10, 12, 23, 45, 24, 11, 12, 34, 45, 12, 34, 45]];
  const barsData = [
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
      <iframe
        className={styles.qirui}
        width="100%"
        height="336px"
        scrolling="no"
        frameBorder={0}
        src={
          BASE_URL +
          '/webroot/decision/view/form?viewlet=qirui%252Fbar%252Fbar1.frm'
        }
      ></iframe>
      <BarChart
        width="40%"
        height="336px"
        data={barData}
        config={barChartConfig}
      />
      <BarChart
        width="40%"
        height="336px"
        data={barStackData}
        config={barChart2Config}
      />
      <BarChart
        width="40%"
        height="336px"
        data={barData}
        config={barChart3Config}
      />
      <BarChart
        width="40%"
        height="336px"
        data={barStripStackData}
        config={barChart4Config}
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
      <BarChart
        width="40%"
        height="336px"
        data={[
          [18, 12, 10, 15],
          [28, 15, 20, 30],
          [34, 18, 25, 32],
          [40, 25, 30, 38],
        ]}
        config={barChart5Config}
      />
      <BarChart
        width="40%"
        height="336px"
        data={async () => {
          let res = [
            [18, 12, 10, 15],
            [28, 15, 20, 30],
            [34, 18, 25, 32],
            [40, 25, 30, 38],
          ];
          return res;
        }}
        config={barChart5Config}
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
      <LineChart
        width="754px"
        height="336px"
        data={async () => {
          let res = await [[36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42]];
          return res;
        }}
        config={lineChart2Config}
        ref={lineRef}
      />
      <LineChart
        width="754px"
        height="336px"
        data={async () => {
          let res = await [
            [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
            [20, 18, 34, 23, 45, 24, 65, 12, 45, 12, 34, 10],
          ];
          return res;
        }}
        config={lineChart3Config}
        ref={lineRef}
      />
      <LineChart
        width="754px"
        height="336px"
        data={lineAreaData}
        config={lineChart4Config}
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
        data={async () => {
          let res = await [
            [40, 35, 28, 24],
            [10, 35, 10, 22],
          ];
          return res;
        }}
        config={barLineChartConfig}
        ref={barLineRef}
      />
      <BarLineChart
        width="40%"
        height="336px"
        /* data={[
          [40, 35, 28, 24],
          [10, 35, 10, 22],
          [20, 15, 20, 32],
        ]} */
        data={async () => {
          let res = await [
            [40, 35, 28, 24],
            [10, 35, 10, 22],
            [20, 15, 20, 32],
          ];
          return res;
        }}
        config={barLineChart2Config}
        ref={barLineRef}
      />
    </div>
  );
};

export default ZLCharts;
