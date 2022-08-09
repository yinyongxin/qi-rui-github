import { ECElementEvent } from 'echarts/types/src/util/types';
import { MyChartOption } from './echarts.config';

export interface MyChartProps {
  option: MyChartOption | null | undefined;
  width: number | string;
  height: number | string;
  loading?: boolean;
  onClick?(event: ECElementEvent): any;
}
