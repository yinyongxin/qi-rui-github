import React, {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import BaseChart from './BaseChart';
import { LineChartPropsInterface, IRefInterface } from '../types';
import { isArray } from 'lodash';

const LineChart = React.forwardRef<IRefInterface, LineChartPropsInterface>(
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
        grid: {
          top: 34,
          // left: 24,
          right: 24,
          left: 50,
          bottom: 100,
        },
        legend: config?.typeStyle
          ? {
              show: config?.typeStyle?.show,
              textStyle: {
                color:
                  config?.typeStyle?.textColor ||
                  'var(--design-neutral-color-2)',
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
          name: config?.itemName?.[index],
          itemStyle: {
            color: config?.itemColor?.[index],
          },
          areaStyle: config?.isAreaLine
            ? {
                color: config?.areaStyleColor?.[index],
              }
            : null,
          symbol: config?.seriesSymbolType || 'emptyCircle',
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
          name: config?.itemName?.[index],
          itemStyle: {
            color: config?.itemColor?.[index],
          },
          areaStyle: config?.isAreaLine
            ? {
                color: config?.areaStyleColor?.[index],
              }
            : null,
          symbol: config?.seriesSymbolType || 'emptyCircle',
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
