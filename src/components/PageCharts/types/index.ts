import { MyChartOption } from '../config/echarts.config';

export interface BasePropsInterface {
  option: MyChartOption;
  width: string | number;
  height: string;
}

export interface ChartPropsInterface {
  width: string | number;
  height: string;
  data: any[];
  config?: ChartsConfigInterface;
}

export interface ChartsConfigInterface {
  xLabel: any[];
  seriesColor?: string[];
  axisTickShow?: boolean;
  splitLineColor?: string;
  areaStyleColor?: string[];
  barWidth?: string;
  loading?: boolean;
}
