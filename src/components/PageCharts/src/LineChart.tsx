import React, {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import BaseChart from './BaseChart';
import { ChartPropsInterface, IRefInterface } from '../types';
import { isArray } from 'lodash';

const LineChart = React.forwardRef<IRefInterface, ChartPropsInterface>(
  (props, ref: ForwardedRef<IRefInterface>) => {
    // state & props
    const { data, width = '745px', height = '336px', config } = props;
    const [option, setOption] = useState({});
    const [series, setSeries] = useState<any>([]);

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
        color: ['var(--design-success-color)', 'var(--design-base-color)'],
        xAxis: {
          type: 'category',
          data: config?.xLabel,
          axisTick: {
            show: config?.axisTickIsShow,
          },
          boundaryGap: config?.isBoundaryGap && true,
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: config?.splitLineType || 'solid',
              color: config?.splitLineColor,
            },
          },
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
    const renderData = (data: any[]) => {
      let series: any[] = [];
      data.map((item, index) => {
        let handleData = {
          type: 'line',
          data: item,
          itemStyle: {
            color: config?.itemColor?.[index],
          },
          areaStyle: config?.isAreaLine
            ? {
                color: config?.areaStyleColor?.[index],
              }
            : null,
          symbol: config?.seriesSymbolType || 'emptyCircle',
          stack: 'xxx',
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
          type: 'line',
          data: item,
          itemStyle: {
            color: config?.itemColor?.[index],
          },
          areaStyle: config?.isAreaLine
            ? {
                color: config?.areaStyleColor?.[index],
              }
            : null,
          symbol: config?.seriesSymbolType || 'emptyCircle',
          stack: 'xxx',
        };
        series.push(handleData);
      });
      return series;
    };

    return (
      <div>
        <BaseChart option={option} width={width} height={height} />
      </div>
    );
  }
);

export default LineChart;
