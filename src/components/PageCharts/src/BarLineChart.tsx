import React, { useEffect, useState } from 'react';

import { isArray } from 'lodash';
import BaseChart from './BaseChart';
import { ChartPropsInterface } from '../types';

const BarLineChart: React.FC<ChartPropsInterface> = (props) => {
  // state & props
  const { data, width = '754px', height = '336px', config } = props;
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
        'var(--design-charts-type2-color)',
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
            color: config?.barInverse ? config?.splitLineColor : null,
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
    let series: any[] = [
      {
        data: res[0],
        type: 'bar',
        itemStyle: {
          color: config?.itemColor?.[0],
        },
      },
      {
        data: res[1],
        type: 'line',
        symbol: config?.seriesSymbolType || 'emptyCircle',
        itemStyle: {
          color: config?.itemColor?.[1],
        },
      },
    ];
    return series;
  };
  const renderDataAsync = async (res: any) => {
    let result = await res();
    let series: any[] = [
      {
        data: result[0],
        type: 'bar',
        itemStyle: {
          color: config?.itemColor?.[0],
        },
      },
      {
        data: result[1],
        type: 'line',
        symbol: config?.seriesSymbolType || 'emptyCircle',
        itemStyle: {
          color: config?.itemColor?.[1],
        },
      },
    ];
    return series;
  };

  return (
    <>
      <BaseChart option={option} width={width} height={height} />
    </>
  );
};

export default BarLineChart;
