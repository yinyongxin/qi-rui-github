import {
  BarLineChartConfig,
  LineChartConfig,
  PieChartConfig,
  BarChartConfig,
} from '@/components/PageCharts/types';

export let barLineChartConfig: BarLineChartConfig = {
  xLabel: [1, 2, 3, 4],
  itemName: ['今年', '去年同期', '目标值'],
  typeStyle: {
    show: true,
    textColor: 'var(--design-neutral-color-2)',
    textPosition: {
      isBottom: true,
      distance: 50,
    },
    itemGap: 50,
  },
  barGap: 0,
  grid: {
    top: 0,
    left: 34,
    bottom: 130,
  },
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'none',
  itemColor: [
    '#999999',
    'var(--design-charts-type3-color)',
    'var(--design-charts-type2-color)',
  ],
  /* computedColor: [
    'var(--design-charts-type8-color)',
    'var(--design-charts-type9-color)',
    'var(--design-charts-type1-color)',
  ], */
};
