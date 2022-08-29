import React, {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import { isArray } from 'lodash';
import BaseChart from './BaseChart';
import { BarLineChartPropsInterface, IRefInterface } from '../types';
import LeftLogo from '@/Layout/NavBar/coms/LeftLogo';

const BarLineChart = React.forwardRef<
  IRefInterface,
  BarLineChartPropsInterface
>((props, ref: ForwardedRef<IRefInterface>) => {
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
        'var(--design-charts-type5-color)',
        'var(--design-charts-type2-color)',
      ],

      title: {},
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
        left: config?.grid?.left || 48,
        bottom: config?.grid?.bottom || 100,
      },
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
    /* let series: any[] = [
        {
          data: res[0],
          type: 'line',
          // name: config?.itemName?.[0],
          symbol: config?.seriesSymbolType || 'emptyCircle',
          itemStyle: {
            normal: {
              color: config?.itemColor?.[0],
            },
          },
        },
        {
          data: res[1],
          type: 'bar',
          // name: config?.itemName?.[0],
          itemStyle: {
            normal: {
              color: function (params: any) {
                let barData = params.value;
                for (let i = 0; i < res[0].length; i++) {
                  let item = res[0][i];
                  if (params.dataIndex === i) {
                    if (barData < item) {
                      if ((item - barData) / 100 < 0.05) {
                        return 'var(--design-charts-type8-color)';
                      } else {
                        return 'var(--design-charts-type9-color)';
                      }
                    } else {
                      return 'var(--design-charts-type1-color)';
                    }
                  }
                }
              },
            },
            // color: config?.itemColor?.[0],
          },
        },
      ]; */
    let series = renderBarLine(res);
    return series;
  };
  const renderDataAsync = async (res: any) => {
    let result = await res();
    let series = renderBarLine(result);
    return series;
  };
  const renderBarLine = (res: any[]) => {
    let series = [];
    const [lineData, ...barData] = res;
    let lineObj = {
      data: lineData,
      type: 'line',
      name: config?.itemName?.[config.itemName.length - 1],
      symbol: config?.seriesSymbolType || 'emptyCircle',
      itemStyle: {
        normal: {
          color: config?.itemColor?.[0],
        },
      },
    };
    series.push(lineObj);
    barData.forEach((item, index) => {
      series.push({
        data: item,
        type: 'bar',
        barGap: config?.barGap,
        name: config?.itemName?.[index],
        itemStyle: config?.computedColor
          ? {
              normal: {
                color: function (params: any) {
                  let barData = params.value;
                  for (let i = 0; i < lineData.length; i++) {
                    let item = lineData[i];
                    if (params.dataIndex === i) {
                      if (barData < item) {
                        if ((item - barData) / 100 < 0.05) {
                          // return 'var(--design-charts-type8-color)';
                          return config?.computedColor?.[0];
                        } else {
                          return config?.computedColor?.[1];
                        }
                      } else {
                        return config?.computedColor?.[2];
                      }
                    }
                  }
                },
              },
              // color: config?.itemColor?.[0],
            }
          : {
              normal: {
                color: config?.itemColor?.[index + 1],
              },
              // color: config?.itemColor?.[0],
            },
      });
    });
    return series;
  };

  return (
    <>
      <BaseChart option={option} width={width} height={height} />
    </>
  );
});

export default BarLineChart;
