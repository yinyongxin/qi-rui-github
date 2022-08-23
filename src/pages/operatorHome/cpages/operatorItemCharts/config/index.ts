import {
  BarLineChartConfig,
  LineChartConfig,
  PieChartConfig,
  BarChartConfig,
} from '@/components/PageCharts/types';

export let barLineChartConfig: BarLineChartConfig = {
  xLabel: [1, 2, 3, 4],
  itemName: ['产品线一', '产品线二', '产品线-总目标'],
  typeStyle: {
    show: true,
    textColor: 'var(--design-neutral-color-2)',
    textPosition: {
      isBottom: true,
      distance: 30,
    },
    itemGap: 50,
  },
  barGap: 0,
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  itemColor: [
    '#999999',
    'var(--design-charts-type5-color)',
    'var(--design-charts-type2-color)',
  ],
  /* computedColor: [
    'var(--design-charts-type8-color)',
    'var(--design-charts-type9-color)',
    'var(--design-charts-type1-color)',
  ], */
};

export let lineChartConfig: LineChartConfig = {
  xLabel: [1, 2, 3, 4],
  itemName: ['产品线一', '产品线二'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'emptyCircle',
  itemColor: [
    'var(--design-charts-type1-color)',
    'var(--design-charts-type5-color)',
  ],
  isBoundaryGap: true,
  typeStyle: {
    show: true,
    textPosition: {
      isBottom: true,
      distance: 30,
    },
    itemGap: 100,
  },
};

export let pieChartConfig: PieChartConfig = {
  pieRadius: ['50%', '70%'],
  pieLabelIsShow: false,
  seriesName: 'pie',
  legend: {
    orient: 'vertical',
    right: '130',
    top: 'center',
    itemGap: 50,
    textColor: 'var(--design-neutral-color-2)',
  },
};

export let barLine2ChartConfig: BarLineChartConfig = {
  xLabel: ['国内', '国际'],
  itemName: ['同期', '实际', '目标达成率'],
  typeStyle: {
    show: true,
    textColor: 'var(--design-neutral-color-2)',
    textPosition: {
      isBottom: true,
      distance: 30,
    },
    itemGap: 50,
  },
  barGap: 0,
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  itemColor: [
    '#999999',
    'var(--design-charts-type1-color)',
    'var(--design-charts-type8-color)',
  ],
  /* computedColor: [
    'var(--design-charts-type8-color)',
    'var(--design-charts-type9-color)',
    'var(--design-charts-type1-color)',
  ], */
};
export let barLine3ChartConfig: BarLineChartConfig = {
  xLabel: ['国内', '国际'],
  itemName: ['同期', '实际', '目标达成率'],
  typeStyle: {
    show: true,
    textColor: 'var(--design-neutral-color-2)',
    textPosition: {
      isBottom: true,
      distance: 30,
    },
    itemGap: 50,
  },
  barGap: 0,
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  itemColor: [
    '#999999',
    'var(--design-charts-type1-color)',
    'var(--design-charts-type8-color)',
  ],
  /* computedColor: [
    'var(--design-charts-type8-color)',
    'var(--design-charts-type9-color)',
    'var(--design-charts-type1-color)',
  ], */
};

export let barChartConfig: BarChartConfig = {
  xLabel: ['产品线一', '产品线二', '产品线三', '产品线四'],
  itemName: ['产品线一', '产品线二', '产品线三', '产品线四'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  barInverse: true,
  itemColor: ['var(--design-charts-type3-color)'],
  grid: {
    left: 80,
  },
};
export let barChart2Config: BarChartConfig = {
  xLabel: ['区域A', '区域B', '区域C', '区域D'],
  itemName: ['区域A', '区域B', '区域C', '区域D'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  barInverse: true,
  itemColor: ['var(--design-charts-type3-color)'],
  grid: {
    left: 80,
  },
};
export let barChart3Config: BarChartConfig = {
  xLabel: ['区域A', '区域B', '区域C', '区域D'],
  itemName: ['区域A', '区域B', '区域C', '区域D'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  barInverse: true,
  itemColor: ['var(--design-charts-type3-color)'],
  grid: {
    left: 80,
  },
};
export let barChart4Config: BarChartConfig = {
  xLabel: ['车型一', '车型二', '车型三', '车型四'],
  itemName: ['车型一', '车型二', '车型三', '车型四'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  barInverse: true,
  itemColor: ['var(--design-charts-type3-color)'],
  grid: {
    left: 80,
  },
};
