import { LineChartConfig, BarChartConfig } from '@/components/PageCharts/types';

export let barChartConfig: BarChartConfig = {
  xLabel: ['近3年周期', '近2年周期', '近1年周期', '今年'],
  itemName: ['销售净利率', '目标值', '总资产周转率'],
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
    'var(--design-charts-type1-color)',
    '#999999',
    'var(--design-charts-type5-color)',
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

export let lineChartConfig: LineChartConfig = {
  xLabel: [1, 2, 3, 4],
  itemName: ['今年', '去年同期', '目标值'],
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  seriesSymbolType: 'emptyCircle',
  itemColor: [
    'var(--design-charts-type5-color)',
    'var(--design-charts-type1-color)',
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

export let barChart2Config: BarChartConfig = {
  xLabel: ['近3年周期', '近2年周期', '近1年周期', '今年'],
  itemName: [
    '成本总额',
    '目标值',
    '主营业务收入净额',
    '',
    '主营业务收入净额-成本总额',
  ],
  typeStyle: {
    show: true,
    textColor: 'var(--design-neutral-color-2)',
    textPosition: {
      isBottom: true,
      distance: 20,
    },
  },
  axisTickIsShow: false,
  splitLineType: 'dashed',
  splitLineColor: 'var(--design-neutral-color-5)',
  itemColor: [
    'var(--design-charts-type9-color)',
    '#999999',
    'var(--design-charts-type5-color)',
    '#999999',
    'var(--design-charts-type8-color)',
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
    {
      from: 4,
      to: 5,
      str: 'stacks2',
    },
  ],
};
