import React, { useState } from 'react';

import { Card, Title } from 'qirui-digitization-ui';
import { BarLineChart } from '@/components/PageCharts';

import styles from './styles.module.less';
import { barLineChartConfig } from './config';

const ZLChartsManagement = () => {
  // state & props
  const [state, setState] = useState([
    {
      id: 1,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 2,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 3,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 4,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 5,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
    {
      id: 6,
      title: 'hpv值超5%阈值',
      originator: '张长弓',
      status: 2,
      dateTime: '2021-02-03 18:56:23',
    },
  ]);

  // redux hooks

  // other hooks

  // handles
  const headerStyle = {
    color: 'var(--design-neutral-color-1)',
    paddingTop: '12px',
    paddingBottom: '16px',
  };
  const bodyStyle = {
    padding: '16px',
  };
  return (
    <div className={styles.zlManagementWrapper}>
      <Title title="MANAGEMENT" tooltip="tooltip"></Title>
      <div className={styles.content}>
        <Card
          title="生产材料周转天数"
          headerStyle={headerStyle}
          bodyStyle={bodyStyle}
        >
          <div className={styles.info}>
            <div className={styles.infoTitle}>
              <span className={styles.actual}>528</span>
              <span className={styles.target}>目标值：500</span>
            </div>
            <div className={styles.infoCharts}>
              <BarLineChart
                width="100%"
                height="336px"
                data={async () => {
                  let res = await [
                    [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
                    [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
                  ];
                  return res;
                }}
                config={barLineChartConfig}
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ZLChartsManagement;
