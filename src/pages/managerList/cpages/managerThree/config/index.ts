import { LineChartConfig, BarChartConfig } from '@/components/PageCharts/types';

export let lineChartConfig: LineChartConfig = {
  xLabel: [1, 2, 3, 4],
  itemName: ['今年', '去年同期', '目标值'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'emptyCircle',
  itemColor: [
    'var(--design-charts-type3-color)',
    'var(--design-charts-type2-color)',
    '#999999',
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

export let barChartConfig: BarChartConfig = {
  xLabel: ['近3年周期', '近2年周期', '近1年周期', '今年'],
  itemName: ['总资产净利率', '目标值', '权益系数'],
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
  itemColor: [
    'var(--design-charts-type3-color)',
    '#999999',
    'var(--design-charts-type1-color)',
    '#999999',
  ],
  seriesStack: [
    {
      from: 0,
      to: 1,
      str: 'stacks0',
    },
    {
      from: 2,
      to: 3,
      str: 'stacks1',
    },
  ],
};
