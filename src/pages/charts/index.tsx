import React from 'react';
import MyChart from '@/components/Charts';
import { MyChartOption } from '@/components/Charts/echarts.config';

import styles from './styles.module.less';

const ZLCharts: React.FC = () => {
  const barLineOption: MyChartOption = {
    xAxis: {
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'var(--design-neutral-color-5)',
        },
      },
    },
    series: [
      {
        name: '碳排放量',
        data: [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        type: 'bar',
        itemStyle: {
          color: 'var(--design-charts-type3-color)',
        },
        barWidth: 16,
      },
      {
        data: [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
        type: 'line',
        itemStyle: {
          color: 'var(--design-charts-type5-color)',
        },
        symbol: 'none',
      },
    ],
  };
  const lineOption: MyChartOption = {
    xAxis: {
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'var(--design-neutral-color-5)',
        },
      },
    },
    series: [
      {
        data: [38, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
        type: 'line',
        itemStyle: {
          color: 'var(--design-charts-type5-color)',
        },
        symbol: 'none',
      },
    ],
  };
  const barOption: MyChartOption = {
    xAxis: {
      type: 'category',
      data: ['Q1', 'Q2', 'Q3', 'Q4'],
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'var(--design-neutral-color-5)',
        },
      },
    },
    series: [
      {
        data: [36, 32, 25, 33],
        type: 'bar',
        barWidth: '8px',
        itemStyle: {
          color: 'var(--design-charts-type1-color)',
        },
      },
      {
        data: [23, 34, 15, 28],
        type: 'bar',
        barWidth: '8px',
        itemStyle: {
          color: 'var(--design-charts-type2-color)',
        },
      },
      {
        data: [35, 32, 35, 38],
        type: 'bar',
        barWidth: '8px',
        itemStyle: {
          color: 'var(--design-charts-type3-color)',
        },
      },
      {
        data: [40, 42, 40, 40],
        type: 'bar',
        barWidth: '8px',
        itemStyle: {
          color: 'var(--design-charts-type5-color)',
        },
      },
    ],
  };
  const lineAreaOption: MyChartOption = {
    xAxis: {
      type: 'category',
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'var(--design-neutral-color-5)',
        },
      },
    },
    series: [
      {
        data: [13, 21, 11, 17, 21, 14, 17, 5, 18, 10, 17, 11],
        type: 'line',
        areaStyle: {
          color: 'rgba(54, 240, 151, 0.2)',
        },
        itemStyle: {
          color: 'var(--design-charts-type5-color)',
        },
        symbol: 'none',
      },
      {
        data: [32, 48, 25, 38, 48, 32, 39, 15, 40, 28, 36, 25],
        type: 'line',
        areaStyle: {
          color: 'rgba(30, 214, 255, 0.2)',
        },
        itemStyle: {
          color: 'var(--design-charts-type3-color)',
        },
        symbol: 'none',
      },
    ],
  };
  const stackBarOption: MyChartOption = {
    xAxis: [
      {
        type: 'category',
        data: ['Q1', 'Q2', 'Q3', 'Q4'],
        axisTick: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          lineStyle: {
            type: 'dashed',
            color: 'var(--design-neutral-color-5)',
          },
        },
      },
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'Search Engine',
        data: [18, 12, 10, 15],
        itemStyle: {
          color: 'var(--design-charts-type5-color)',
        },
        barWidth: '24px',
      },
      {
        name: 'Direct',
        type: 'bar',
        stack: 'Search Engine',
        data: [28, 15, 20, 30],
        itemStyle: {
          color: 'var(--design-charts-type3-color)',
        },
      },
      {
        name: 'Direct',
        type: 'bar',
        stack: 'Search Engine',
        data: [34, 18, 25, 32],
        itemStyle: {
          color: 'var(--design-charts-type2-color)',
        },
      },
      {
        name: 'Direct',
        type: 'bar',
        stack: 'Search Engine',
        data: [40, 30, 30, 40],
        itemStyle: {
          color: 'var(--design-charts-type1-color)',
        },
      },
    ],
  };
  const pieOption: MyChartOption = {
    color: [
      'var(--design-charts-type1-color)',
      'var(--design-charts-type2-color)',
      'var(--design-charts-type3-color)',
      'var(--design-charts-type5-color)',
    ],
    legend: {
      top: '25%',
      right: '20%',
      width: '40',
      textStyle: {
        color: '#A6A6A6',
        lineHeight: 30,
      },
      // data: ['17.6%', '2.8%', '41.2%', '38.4%'],
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['50%', '70%'],
        label: {
          show: false,
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
        data: [
          { value: 17.6, name: '模块一' },
          { value: 2.8, name: '模块二' },
          { value: 41.2, name: '模块三' },
          { value: 38.4, name: '模块四' },
        ],
      },
    ],
  };
  const stripOption: MyChartOption = {
    xAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'var(--design-neutral-color-5)',
        },
      },
    },
    yAxis: {
      type: 'category',
      data: ['模块一', '模块二', '模块三', '模块四', '模块五', '模块六'],
      axisTick: {
        show: false,
      },
      inverse: true,
      axisLabel: {
        color: 'var(--design-color-white)', //坐标值得具体的颜色
      },
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [280, 110, 94, 46, 36, 22],
        itemStyle: {
          color: 'var(--design-charts-type3-color)',
        },
        barWidth: 16,
      },
    ],
  };
  const stackStripOption: MyChartOption = {
    color: [
      'var(--design-charts-type5-color)',
      'var(--design-charts-type3-color)',
      'var(--design-charts-type2-color)',
      'var(--design-charts-type1-color)',
    ],
    xAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: 'var(--design-neutral-color-5)',
        },
      },
    },
    yAxis: {
      type: 'category',
      data: ['模块一', '模块二', '模块三', '模块四', '模块五', '模块六'],
      axisTick: {
        show: false,
      },
      inverse: true,
      axisLabel: {
        color: 'var(--design-color-white)',
      },
    },
    series: [
      {
        name: 'Direct',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series',
        },
        data: [14, 15, 16, 17, 18, 19],
        barWidth: 16,
      },
      {
        name: 'Mail Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series',
        },
        data: [36, 27, 38, 39, 40, 41],
      },
      {
        name: 'Affiliate Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series',
        },
        data: [86, 87, 88, 89, 90, 91],
      },
      {
        name: 'Video Ad',
        type: 'bar',
        stack: 'total',
        label: {
          show: false,
        },
        emphasis: {
          focus: 'series',
        },
        data: [246, 250, 260, 265, 270, 300],
        barCategoryGap: '50%',
      },
    ],
  };

  // handles

  return (
    <div className={styles.charts}>
      <MyChart
        option={barLineOption}
        width="40%"
        height={336}
        loading={false}
      />
      <MyChart option={lineOption} width="40%" height={336} />
      <MyChart option={barOption} width="40%" height={336} />
      <MyChart option={lineAreaOption} width="40%" height={336} />
      <MyChart option={stackBarOption} width="40%" height={336} />
      <MyChart option={pieOption} width="40%" height={336} />
      <MyChart option={stripOption} width="40%" height={336} />
      <MyChart option={stackStripOption} width="40%" height={336} />
    </div>
  );
};

export default ZLCharts;
