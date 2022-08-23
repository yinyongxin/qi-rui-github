import React from 'react';

import { BarChart, LineChart } from '@/components/PageCharts';
import { lineChartConfig, barChartConfig } from './config';

import styles from './styles.module.less';
import { Card } from 'qirui-digitization-ui';

const ZLManagerThree = () => {
  // state & props

  // handles
  const headerStyle = {
    height: '48px',
    color: 'var(--design-neutral-color-1)',
  };
  const bodyStyle = {
    padding: 0,
  };

  return (
    <div className={styles.zlManagerThreeWrapper}>
      <div className={styles.header}>
        <div className={styles.breadCrumb}>面包屑</div>
        <div className={styles.type}>
          <span className={styles.title}>产品线指标概况</span>
          <div className={styles.fen}>分类</div>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.chartsOne}>
          <Card
            title="净资产收益率"
            headerStyle={headerStyle}
            bodyStyle={bodyStyle}
          >
            <div className={styles.in}>
              <LineChart
                width="100%"
                height="327px"
                data={[
                  [2.0, 1.5, 2.0, 2.5],
                  [1.0, 2.0, 1.2, 1.5],
                  [1.2, 1.4, 1.6, 1.8],
                ]}
                config={lineChartConfig}
              />
            </div>
          </Card>
        </div>
        <div className={styles.chartsTwo}>
          <Card
            title="净资产收益率拆分"
            headerStyle={headerStyle}
            bodyStyle={bodyStyle}
          >
            <div className={styles.in}>
              <BarChart
                width="100%"
                height="327px"
                data={[
                  [18, 12, 10, 15],
                  [28, 15, 20, 30],
                  [34, 18, 25, 32],
                  [40, 25, 30, 38],
                ]}
                config={barChartConfig}
              />
            </div>
          </Card>
        </div>
        <div className={styles.chartsThree}>
          <div className={styles.left}>
            <Card
              title="总净资产收益率"
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
            >
              <div className={styles.in}>
                <LineChart
                  width="100%"
                  height="327px"
                  data={[
                    [2.0, 1.5, 2.0, 2.5],
                    [1.0, 2.0, 1.2, 1.5],
                    [1.2, 1.4, 1.6, 1.8],
                  ]}
                  config={lineChartConfig}
                />
              </div>
            </Card>
          </div>
          <div className={styles.right}>
            <Card
              title="权益乘数"
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
            >
              <div className={styles.in}>
                <LineChart
                  width="100%"
                  height="327px"
                  data={[
                    [2.0, 1.5, 2.0, 2.5],
                    [1.0, 2.0, 1.2, 1.5],
                    [1.2, 1.4, 1.6, 1.8],
                  ]}
                  config={lineChartConfig}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZLManagerThree;
