import { MyChartOption } from '../config/echarts.config';
import { ECElementEvent } from 'echarts/types/src/util/types';

export interface BasePropsInterface {
  option: MyChartOption;
  width: string;
  height: string;
  onClick?(event: ECElementEvent): any;
}

export interface ChartPropsInterface {
  width: string;
  height: string;
  data: any[] | (() => Promise<any[]>);
  config?: ChartsConfigInterface;
  onClick?(event: ECElementEvent): any;
  ref?: React.RefObject<IRefInterface>;
}
export interface IRefInterface {
  refresh: () => void;
}

export interface ChartsConfigInterface {
  /**x轴数据 */
  xLabel?: any[];
  /**item名称 */
  itemName?: string[];
  /** 是否显示坐标刻度 */
  axisTickIsShow?: boolean;
  /**item宽度 */
  labelWidth?: string;
  /**显示分类样式 */
  typeStyle?: {
    show: boolean;
    textColor?: string;
    textPosition?: {
      isBottom?: boolean;
      distance?: string | number;
    };
    itemGap?: number;
  };
  /**网格线类型 */
  splitLineType?: 'solid' | 'dashed' | 'dotted';
  /**网格线颜色 */
  splitLineColor?: string;
  /**折线图拐点类型 */
  seriesSymbolType?:
    | 'circle'
    | 'rect'
    | 'roundRect'
    | 'triangle'
    | 'diamond'
    | 'pin'
    | 'arrow'
    | 'none'
    | 'emptyCircle';
  /**图表item颜色 */
  itemColor?: string[];
  /**是否是区域折线 */
  isAreaLine?: boolean;
  /**区域折线颜色 */
  areaStyleColor?: string[];
  /**是否去除折线图两边空白 */
  isBoundaryGap?: boolean;
  /**堆叠标识 */
  seriesStack?: string;
  /**饼状图半径 */
  pieRadius?: string[];
  /** 是否显示饼状图label */
  pieLabelIsShow?: boolean;
  barInverse?: boolean;
  /**标题文本 */
  titleText?: string;
  /**标题文本颜色 */
  titleColor?: string;
  /**饼状图提示框标题 */
  seriesName?: string;
  computedColor?: string[];

  barWidth?: string;
  loading?: boolean;
  /**grid布局 */
  grid?: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
  /**多个柱状图之间间距 */
  barGap?: number | string;
  /**饼状图位置 */
  center?: string[];
  /**legend样式 */
  legend?: {
    orient?: string;
    right?: string;
    left?: string;
    top?: string;
    itemGap?: number;
    textColor?: string;
  };
}

export interface BarChartConfig {
  /**x轴label数据 */
  xLabel: any[];
  /**item名称 */
  itemName?: string[];
  /**item宽度 */
  labelWidth?: string;
  /** 是否显示坐标刻度 */
  axisTickIsShow?: boolean;
  /**网格线类型 */
  splitLineType?: 'solid' | 'dashed' | 'dotted';
  /**网格线颜色 */
  splitLineColor?: string;
  /**图表item颜色 */
  itemColor?: string[];
  /**是否为堆叠图 */
  seriesStack?: 'stack' | 'stacks';
  /**是否为条形图 */
  barInverse?: boolean;
  /**显示分类样式 */
  typeStyle?: {
    show: boolean;
    textColor?: string;
    textPosition?: {
      isBottom?: boolean;
      distance?: string | number;
    };
    itemGap?: number;
  };
  /**grid布局 */
  grid?: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
  /**多个柱状图之间间距 */
  barGap?: number | string;
}

export interface LineChartConfig {
  /**x轴label数据 */
  xLabel: any[];
  /**item名称 */
  itemName?: string[];
  /** 是否显示坐标刻度 */
  axisTickIsShow?: boolean;
  /**网格线类型 */
  splitLineType?: 'solid' | 'dashed' | 'dotted';
  /**网格线颜色 */
  splitLineColor?: string;
  /**折线图拐点类型 */
  seriesSymbolType?:
    | 'circle'
    | 'rect'
    | 'roundRect'
    | 'triangle'
    | 'diamond'
    | 'pin'
    | 'arrow'
    | 'none'
    | 'emptyCircle';
  /**是否是区域折线 */
  isAreaLine?: boolean;
  /**区域折线颜色 */
  areaStyleColor?: string[];
  /**图表item颜色 */
  itemColor?: string[];
  /**是否去除折线图两边空白 */
  isBoundaryGap?: boolean;
  /**显示分类样式 */
  typeStyle?: {
    show: boolean;
    textColor?: string;
    textPosition?: {
      isBottom?: boolean;
      distance?: string | number;
    };
    itemGap?: number;
  };
}

export interface PieChartConfig {
  /**标题文本 */
  titleText?: string;
  /**标题文本颜色 */
  titleColor?: string;
  /**饼状图半径 */
  pieRadius?: string[];
  /** 是否显示饼状图label */
  pieLabelIsShow?: boolean;
  /**饼状图提示框标题 */
  seriesName?: string;
  /**饼状图位置 */
  center?: string[];
  /**legend样式 */
  legend?: {
    orient?: string;
    right?: string;
    left?: string;
    top?: string;
    itemGap?: number;
    textColor?: string;
  };
}

export interface BarLineChartConfig {
  /**x轴label数据 */
  xLabel: any[];
  /**item名称 */
  itemName?: string[];
  /** 是否显示坐标刻度 */
  axisTickIsShow?: boolean;
  /**网格线类型 */
  splitLineType?: 'solid' | 'dashed' | 'dotted';
  /**网格线颜色 */
  splitLineColor?: string;
  /**图表item颜色 */
  itemColor?: string[];
  /**堆叠标识 */
  seriesStack?: string;
  /**是否为堆叠图 */
  barInverse?: boolean;
  /**折线图拐点类型 */
  seriesSymbolType?:
    | 'circle'
    | 'rect'
    | 'roundRect'
    | 'triangle'
    | 'diamond'
    | 'pin'
    | 'arrow'
    | 'none'
    | 'emptyCircle';
  /**是否是区域折线 */
  isAreaLine?: boolean;
  /**区域折线颜色 */
  areaStyleColor?: string[];
  /**显示分类样式 */
  typeStyle?: {
    show: boolean;
    textColor?: string;
    textPosition?: {
      isBottom?: boolean;
      distance?: string | number;
    };
    itemGap?: number;
  };
  /**计算颜色 */
  computedColor?: string[];
  /**多个柱状图之间间距 */
  barGap?: number | string;
  /**grid布局 */
  grid?: {
    top?: number;
    right?: number;
    left?: number;
    bottom?: number;
  };
}
