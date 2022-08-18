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
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130, 190, 140, 90, 6],
            type: 'bar',
            itemStyle: {
              normal: {
                color: function (params: any) {
                  console.log(params, 234);

                  // 给出颜色组
                  var colorList = ['#cca272', '#74608f', '#d7a02b', '#c8ba23'];
                  //循环调用
                  return colorList[params.dataIndex % colorList.length];
                },
              },
            },
          },
        ],
      });
    }, [series]);

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
  }
);

export default BarChart;
