import {
  BarChartConfig,
  LineChartConfig,
  PieChartConfig,
  BarLineChartConfig,
} from '@/components/PageCharts/types';

/* export let barChartConfig: BarChartConfig = {
  xLabel: ['Q1', 'Q2', 'Q3', 'Q4'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  itemColor: [
    'var(--design-charts-type1-color)',
    'var(--design-charts-type2-color)',
    'var(--design-charts-type3-color)',
    'var(--design-charts-type5-color)',
  ],
}; */
export let barStackChartConfig: BarChartConfig = {
  xLabel: ['Q1', 'Q2', 'Q3', 'Q4'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  itemColor: [
    'var(--design-charts-type1-color)',
    'var(--design-charts-type2-color)',
    'var(--design-charts-type3-color)',
    'var(--design-charts-type5-color)',
  ],
  seriesStack: 'stack',
};
export let barStripChartConfig: BarChartConfig = {
  xLabel: ['模块一', '模块二', '模块三', '模块四', '模块五', '模块六'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  barInverse: true,
  itemColor: ['var(--design-charts-type2-color)'],
};
export let barStripStackChartConfig: BarChartConfig = {
  xLabel: ['模块一', '模块二', '模块三', '模块四', '模块五', '模块六'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  barInverse: true,
  seriesStack: 'stack',
  // itemColor: ['var(--design-charts-type2-color)'],
};

export let lineChartConfig: LineChartConfig = {
  xLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  itemColor: ['var(--design-success-color)'],
  isBoundaryGap: false,
};
export let lineAreaChartConfig: LineChartConfig = {
  xLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  isAreaLine: true,
  itemColor: ['var(--design-success-color)', 'var(--design-base-color)'],
  areaStyleColor: ['rgba(54, 240, 151, 0.5)', 'rgba(30, 214, 255, 0.5)'],
};

export let pieChartConfig: PieChartConfig = {
  pieRadius: ['50%', '70%'],
  pieLabelIsShow: false,
  seriesName: 'pie',
};

export let barLineChartConfig: BarLineChartConfig = {
  xLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  itemColor: [
    'var(--design-charts-type2-color)',
    'var(--design-charts-type5-color)',
  ],
};
export let barChartConfig: BarChartConfig = {
  xLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
};
