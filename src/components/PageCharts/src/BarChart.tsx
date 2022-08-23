import React, {
  useEffect,
  useState,
  useImperativeHandle,
  useRef,
  ForwardedRef,
} from 'react';

import BaseChart from './BaseChart';
import { ChartPropsInterface, IRefInterface } from '../types';
import { isArray } from 'lodash';

const BarChart = React.forwardRef<IRefInterface, ChartPropsInterface>(
  (props, ref: ForwardedRef<IRefInterface>) => {
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
        legend: config?.typeStyle
          ? {
              show: config?.typeStyle?.show,
              textStyle: {
                color: config?.typeStyle?.textColor,
              },
              bottom: config?.typeStyle?.textPosition?.isBottom
                ? config?.typeStyle?.textPosition?.distance
                : null,
              top: config?.typeStyle?.textPosition?.isBottom
                ? null
                : config?.typeStyle?.textPosition?.distance,
              itemGap: config?.typeStyle?.itemGap || 20,
            }
          : null,
        grid: {
          top: config?.grid?.top || 34,
          // left: 24,
          right: config?.grid?.right || 24,
          left: config?.grid?.left || 34,
          bottom: config?.grid?.bottom || 80,
        },
        xAxis: {
          type: config?.barInverse ? 'value' : 'category',
          data: config?.barInverse ? null : config?.xLabel,
          axisTick: {
            show: config?.barInverse ? null : config?.axisTickIsShow,
          },
          splitLine: {
            lineStyle: {
              type: config?.barInverse
                ? config?.splitLineType || 'solid'
                : null,
              color: config?.barInverse ? config?.splitLineColor : '#ffffff',
            },
          },
        },
        yAxis: {
          type: config?.barInverse ? 'category' : 'value',
          splitLine: {
            lineStyle: {
              type: config?.barInverse
                ? null
                : config?.splitLineType || 'solid',
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

    useImperativeHandle(
      ref,
      () => {
        return {
          refresh() {
            console.log(111);
          },
        };
      },
      [data]
    );

    // handles
    const renderData = (res: any[]) => {
      let series: any[] = [];
      if (config?.seriesStack === 'stack' || config?.seriesStack == null) {
        res.map((item: any, index: number) => {
          let handleData = {
            type: 'bar',
            data: item,
            barGap: config?.barGap || '0',
            name: config?.itemName?.[index],
            barWidth: config?.labelWidth,
            itemStyle: {
              color: config?.itemColor?.[index],
            },
            stack: config?.seriesStack,
          };
          series.push(handleData);
        });
      } else {
        res.map((item: any, index: number) => {
          let handleData = {
            type: 'bar',
            data: item,
            barGap: config?.barGap || '0',
            name: config?.itemName?.[index],
            barWidth: config?.labelWidth,
            itemStyle: {
              color: config?.itemColor?.[index],
            },
            stack: renderStack(res),
          };
          series.push(handleData);
        });
      }

      return series;
    };
    const renderDataAsync = async (data: any) => {
      let series: any[] = [];
      let result = await data();
      result.map((item: any, index: number) => {
        let handleData = {
          type: 'bar',
          data: item,
          barGap: config?.barGap,
          name: config?.itemName?.[index],
          // barWidth: config?.labelWidth,
          itemStyle: {
            color: config?.itemColor?.[index],
          },
          stack: config?.seriesStack,
        };
        series.push(handleData);
      });
      return series;
    };

    const renderStack = (res: any[]) => {
      let len = res.length / 2;
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
  }
);

export default BarChart;
