import React, {
  ForwardedRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react';

import { isArray } from 'lodash';
import BaseChart from './BaseChart';
import { PieChartPropsInterface, IRefInterface } from '../types';

const PieChart = React.forwardRef<IRefInterface, PieChartPropsInterface>(
  (props, ref: ForwardedRef<IRefInterface>) => {
    // state & props
    const { data, width = '754px', height = '336px', config } = props;
    const [option, setOption] = useState({});
    const [series, setSeries] = useState<any>([]);
    const [fmtData, setFmtData] = useState<any>([]);

    // other hooks
    useEffect(() => {
      if (!isArray(data)) {
        renderDataAsync(data).then((res) => {
          setSeries(res);
        });
        renderFmtDataAsync(data).then((res) => {
          setFmtData(res);
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
        title: {
          text: config?.titleText,
          textStyle: {
            color: config?.titleText && (config?.titleColor || '#ffffff'),
          },
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a}<br/>{b}:{c} ({d}%)',
        },
        legend: {
          orient: config?.legend?.orient || 'horizontal',
          right: config?.legend?.right || 0,
          top: config?.legend?.top || 'center',
          textStyle: {
            color: config?.legend?.textColor || '#ffffff',
          },
          itemGap: config?.legend?.itemGap || 20,
          formatter: (e: string) => {
            var total = 0;
            var val = 0;
            if (isArray(data)) {
              data.forEach((el: any) => {
                total += el.value;
                if (e == el.name) val = el.value;
              });
            } else {
              fmtData.forEach((el: any) => {
                total += el.value;
                if (e == el.name) val = el.value;
              });
            }
            return `${e}  ${((val / total) * 100).toFixed(1)}%`;
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
      let series: any[] = [
        {
          name: config?.seriesName || 'test',
          type: 'pie',
          radius: config?.pieRadius || ['40%', '70%'],
          label: {
            show: config?.pieLabelIsShow || false,
          },
          color: config?.titleColor,
          center: config?.center || ['35%', '53%'],
          data,
        },
      ];
      return series;
    };
    const renderDataAsync = async (data: any) => {
      let result = await data();
      let series: any[] = [
        {
          name: config?.seriesName || 'test',
          type: 'pie',
          radius: config?.pieRadius || ['40%', '70%'],
          label: {
            show: config?.pieLabelIsShow || false,
          },
          color: config?.titleColor,
          data: result,
        },
      ];
      return series;
    };
    const renderFmtDataAsync = async (data: any) => {
      let result = await data();

      return result;
    };

    return (
      <div>
        <BaseChart option={option} width={width} height={height} />
      </div>
    );
  }
);

export default PieChart;
