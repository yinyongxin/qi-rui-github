import React, { useEffect, useState, useImperativeHandle, useRef } from 'react';

import BaseChart from './BaseChart';
import { ChartPropsInterface } from '../types';
import { isArray, isFunction } from 'lodash';

const BarChart: React.FC<ChartPropsInterface> = (props) => {
  // state & props
  const { data, width = '754px', height = '336px', config, onClick } = props;
  const [option, setOption] = useState({});
  const [series, setSeries] = useState<any>([]);

  // redux hooks

  // other hooks
  useEffect(() => {
    if (!isArray(data)) {
      renderDataAsync(data).then((res) => {
        setSeries(res);
      });
    } else {
      setSeries(renderData(data));
    }
  }, [config]);

  useEffect(() => {
    setOption({
      color: [
        'var(--design-charts-type1-color)',
        'var(--design-charts-type2-color)',
        'var(--design-charts-type3-color)',
        'var(--design-charts-type5-color)',
      ],
      xAxis: {
        type: config?.barInverse ? 'value' : 'category',
        data: config?.barInverse ? null : config?.xLabel,
        axisTick: {
          show: config?.barInverse ? null : config?.axisTickIsShow,
        },
        splitLine: {
          lineStyle: {
            type: config?.barInverse ? config?.splitLineType || 'solid' : null,
            color: config?.barInverse ? config?.splitLineColor : '#ffffff',
          },
        },
      },
      yAxis: {
        type: config?.barInverse ? 'category' : 'value',
        splitLine: {
          lineStyle: {
            type: config?.barInverse ? null : config?.splitLineType || 'solid',
            color: config?.barInverse ? null : config?.splitLineColor,
          },
        },
        axisTick: {
          show: config?.barInverse ? config?.axisTickIsShow : null,
        },
        data: config?.barInverse ? config?.xLabel : null,
        inverse: config?.barInverse,
      },
      series,
    });
  }, [series]);

  // handles
  const renderData = (res: any[]) => {
    let series: any[] = [];
    res.map((item: any, index: number) => {
      let handleData = {
        type: 'bar',
        data: item,
        itemStyle: {
          color: config?.itemColor?.[index],
        },
        stack: config?.seriesStack,
      };
      series.push(handleData);
    });
    return series;
  };
  const renderDataAsync = async (data: any) => {
    let series: any[] = [];
    let result = await data();
    result.map((item: any, index: number) => {
      let handleData = {
        type: 'bar',
        data: item,
        itemStyle: {
          color: config?.itemColor?.[index],
        },
        stack: config?.seriesStack,
      };
      series.push(handleData);
    });
    return series;
  };

  return (
    <>
      <BaseChart
        option={option}
        width={width}
        height={height}
        onClick={onClick}
      />
    </>
  );
};

export default BarChart;
