import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Card } from 'qirui-digitization-ui';
import { BarChart } from '@/components/PageCharts';
import { barChartConfig } from './config';

import styles from './styles.module.less';

const ZLManagerSix = () => {
  // state & props

  // other hooks
  const navigate = useNavigate();

  // handles
  const headerStyle = {
    height: '48px',
    color: 'var(--design-neutral-color-1)',
  };
  const bodyStyle = {
    padding: 0,
  };
  const toSeven = () => {
    navigate('/manager/list/seven');
  };

  return (
    <div className={styles.zlManagerSixWrapper}>
      <div className={styles.header}>
        <div className={styles.breadCrumb}>面包屑</div>
        <div className={styles.type}>
          <span className={styles.title}>成本总额</span>
          <div className={styles.fen}>分类</div>
        </div>
      </div>
      <div className={styles.charts}>
        <Card title="成本总额" headerStyle={headerStyle} bodyStyle={bodyStyle}>
          <div className={styles.in} onClick={toSeven}>
            <BarChart
              width="100%"
              height="327px"
              data={[
                [52, 70],
                [90, 80],
                [60, 70],
                [40, 30],
                [25, 15],
              ]}
              config={barChartConfig}
            />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ZLManagerSix;
