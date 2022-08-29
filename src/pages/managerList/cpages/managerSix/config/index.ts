import { BarChartConfig } from '@/components/PageCharts/types';

export let barChartConfig: BarChartConfig = {
  xLabel: ['近三年同期', '今年'],
  itemName: [
    '主营业务成本',
    '主营业务税金及附加',
    '营业费用',
    '管理费用',
    '财务费用',
  ],
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
  barGap: 0,
  itemColor: [
    'var(--design-charts-type5-color)',
    'var(--design-charts-type7-color)',
    'var(--design-charts-type9-color)',
    '#999999',
    'var(--design-charts-type1-color)',
  ],
};
