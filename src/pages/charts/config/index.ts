import {
  BarChartConfig,
  LineChartConfig,
  PieChartConfig,
  BarLineChartConfig,
} from '@/components/PageCharts/types';

export let barChartConfig: BarChartConfig = {
  xLabel: ['Q1', 'Q2', 'Q3', 'Q4'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  barGap: 0,
};
export let barChart2Config: BarChartConfig = {
  xLabel: ['Q1', 'Q2', 'Q3', 'Q4'],
  itemName: ['分类一', '分类二', '分类三', '分类四'],
  typeStyle: {
    show: true,
    textColor: 'var(--design-neutral-color-2)',
    textPosition: {
      isBottom: true,
      distance: 30,
    },
  },
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesStack: 'stack',
};
export let barChart3Config: BarChartConfig = {
  xLabel: ['模块一', '模块二', '模块三', '模块四', '模块五', '模块六'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  barInverse: true,
};
export let barChart4Config: BarChartConfig = {
  xLabel: ['模块一', '模块二', '模块三', '模块四', '模块五', '模块六'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  barInverse: true,
  seriesStack: 'stack',
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
export let lineChart2Config: LineChartConfig = {
  xLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  itemName: ['分类一'],
  typeStyle: {
    show: true,
    textColor: 'var(--design-neutral-color-2)',
    textPosition: {
      isBottom: true,
      distance: 30,
    },
  },
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  itemColor: ['var(--design-success-color)'],
  isBoundaryGap: false,
};
export let lineChart3Config: LineChartConfig = {
  xLabel: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  itemName: ['分类一', '分类二'],
  typeStyle: {
    show: true,
    textColor: 'var(--design-neutral-color-2)',
    textPosition: {
      isBottom: true,
      distance: 30,
    },
  },
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  isBoundaryGap: false,
};
export let lineChart4Config: LineChartConfig = {
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
  center: ['35%', '53%'],
  legend: {
    orient: 'vertical',
    right: '130',
    top: 'center',
    itemGap: 50,
  },
};

export let barLineChartConfig: BarLineChartConfig = {
  xLabel: [1, 2, 3, 4],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  itemColor: [
    'var(--design-charts-type5-color)',
    'var(--design-charts-type2-color)',
  ],
};
export let barLineChart2Config: BarLineChartConfig = {
  xLabel: [1, 2, 3, 4],
  itemName: ['产品线一', '产品线二', '产品线-总目标'],
  typeStyle: {
    show: true,
    textColor: 'var(--design-neutral-color-2)',
    textPosition: {
      isBottom: true,
      distance: 30,
    },
  },
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  itemColor: [
    'var(--design-charts-type5-color)',
    'var(--design-charts-type2-color)',
  ],
  computedColor: [
    'var(--design-charts-type8-color)',
    'var(--design-charts-type9-color)',
    'var(--design-charts-type1-color)',
  ],
};
