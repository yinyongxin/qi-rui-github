import React, { useEffect, useRef, useState } from 'react';
import { EChartsType } from 'echarts/core';
import _ from 'lodash';

import { MyChartOption } from '@/components/Charts/echarts.config';
import echarts from './echarts.config';
import { MyChartProps, ChartsConfigInterface } from './types';
import { lineOption } from './options';

const MyChart: React.FC<MyChartProps> = (props) => {
  // state & props
  const { width = '754px', height = '336px', data, chartsConfig } = props;
  const [option, setOption] = useState({});
  console.log(data.length);

  // redux hooks

  // other hooks
  const cRef = useRef<HTMLDivElement>(null);
  const cInstance = useRef<EChartsType>();

  useEffect(() => {
    if (cRef.current) {
      cInstance.current = echarts.getInstanceByDom(cRef.current);
      // 校验 Dom 节点上是否已经挂载了 ECharts 实例，只有未挂载时才初始化
      if (!cInstance.current) {
        cInstance.current = echarts.init(cRef.current, undefined, {
          renderer: 'svg',
        });
      }
      // 设置配置项
      if (option) cInstance.current?.setOption(option);
    }
  }, [cRef, option]);

  useEffect(() => {
    setOptions(data, chartsConfig);
  }, [data, chartsConfig]);

  // 监听窗口大小变化重绘
  useEffect(() => {
    window.addEventListener('resize', _.throttle(resize, 100));
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [option]);

  // 展示加载中
  /*  useEffect(() => {
    if (loading) cInstance.current?.showLoading();
    else cInstance.current?.hideLoading();
  }, [loading]); */

  // handles
  // 重新适配大小
  const resize = () => {
    cInstance.current?.resize();
  };

  // setOptions
  const setOptions = (data: any[], chartsConfig: ChartsConfigInterface) => {
    if (chartsConfig.type === 1) {
      if (data.length > 1) {
        setOption({
          color: chartsConfig.seriesColor || ['#06F7A1', '#18FEFE'],
          xAxis: {
            type: 'category',
            data: chartsConfig.xData,
            axisTick: {
              show: chartsConfig.axisTickShow === undefined ? false : true,
            },
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color:
                  chartsConfig.splitLineColor ||
                  'var(--design-neutral-color-5)',
              },
            },
          },

          series: [
            {
              data: data[0],
              type: 'line',
              areaStyle: {
                color:
                  (chartsConfig.areaStyleColor &&
                    chartsConfig.areaStyleColor[0]) ||
                  'rgba(54, 240, 151, 0.2)',
              },
              itemStyle: {},
              symbol: 'none',
            },
            {
              data: data[1],
              type: 'line',
              areaStyle: {
                color:
                  (chartsConfig.areaStyleColor &&
                    chartsConfig.areaStyleColor[1]) ||
                  'rgba(30, 214, 255, 0.2)',
              },
              itemStyle: {},
              symbol: 'none',
            },
          ],
        });
      } else {
        setOption({
          color: chartsConfig.seriesColor || ['#06F7A1'],
          xAxis: {
            type: 'category',
            data: chartsConfig.xData,
            axisTick: {
              show: chartsConfig.axisTickShow === undefined ? false : true,
            },
          },
          yAxis: {
            type: 'value',
            splitLine: {
              lineStyle: {
                type: 'dashed',
                color:
                  chartsConfig.splitLineColor ||
                  'var(--design-neutral-color-5)',
              },
            },
          },
          series: [
            {
              data: data[0],
              type: 'line',
              itemStyle: {},
              symbol: 'none',
            },
          ],
        });
      }
    } else if (chartsConfig.type === 2) {
      setOption({
        color: chartsConfig.seriesColor || [
          '#5A3FFF',
          '#268AFF',
          '#18FEFE',
          '#06F7A1',
        ],
        xAxis: {
          type: 'category',
          data: chartsConfig.xData,
          axisTick: {
            show: chartsConfig.axisTickShow === undefined ? false : true,
          },
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color:
                chartsConfig.splitLineColor || 'var(--design-neutral-color-5)',
            },
          },
        },
        series: [
          {
            data: data[0],
            type: 'bar',
            barWidth: chartsConfig.barWidth || '8px',
            itemStyle: {},
          },
          {
            data: data[1],
            type: 'bar',
            barWidth: chartsConfig.barWidth || '8px',
            itemStyle: {},
          },
          {
            data: data[2],
            type: 'bar',
            barWidth: chartsConfig.barWidth || '8px',
            itemStyle: {},
          },
          {
            data: data[3],
            type: 'bar',
            barWidth: chartsConfig.barWidth || '8px',
            itemStyle: {},
          },
        ],
      });
    } else if (chartsConfig.type === 4) {
      setOption({
        color: chartsConfig.seriesColor || ['#06F7A1', '#18FEFE'],
        xAxis: {
          type: 'category',
          data: chartsConfig.xData,
          axisTick: {
            show: chartsConfig.axisTickShow === undefined ? false : true,
          },
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dashed',
              color:
                chartsConfig.splitLineColor || 'var(--design-neutral-color-5)',
            },
          },
        },
        series: [
          {
            data: data[0],
            type: 'line',
            itemStyle: {},
            symbol: 'none',
            barWidth: chartsConfig.barWidth || '16px',
          },
          {
            data: data[1],
            type: 'bar',
            itemStyle: {},
            barWidth: chartsConfig.barWidth || '16px',
          },
        ],
      });
    }
  };

  return <div ref={cRef} style={{ width, height }}></div>;
};

export default MyChart;
