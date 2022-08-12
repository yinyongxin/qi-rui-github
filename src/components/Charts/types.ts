import { ECElementEvent } from 'echarts/types/src/util/types';
import { MyChartOption } from './echarts.config';

export interface ChartsConfigInterface {
  type: 1 | 2 | 3 | 4; // 图标类型 1:折线图 2:柱状图 3:饼图 4: 折线柱状图结合
  xData?: Array<any>;
  seriesColor?: string[];
  axisTickShow?: boolean;
  splitLineColor?: string;
  areaStyleColor?: string[];
  barWidth?: string;
  loading?: boolean;
}

export interface MyChartProps {
  data: Array<any>;
  width?: number | string;
  height?: number | string;
  chartsConfig: ChartsConfigInterface;
}
