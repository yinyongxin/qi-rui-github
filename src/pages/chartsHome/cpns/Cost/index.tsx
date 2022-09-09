import React, { Fragment, useState } from 'react';

import { Card, Title } from 'qirui-digitization-ui';
import { BarLineChart } from '@/components/PageCharts';

import styles from './styles.module.less';
import { barLineChartConfig } from './config';

const ZLChartsCost = () => {
  // state & props
  const state = [
    {
      title: '变动单车',
      actualVal: 528,
      targetVal: 500,
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '变动人工单车',
      actualVal: 528,
      targetVal: 500,
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '变动动能单车',
      actualVal: 528,
      targetVal: 500,
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '其他变动单车',
      actualVal: 528,
      targetVal: 500,
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '固定总额',
      actualVal: 528,
      targetVal: 500,
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '固定人工总额',
      actualVal: 528,
      targetVal: 500,
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '其他固定总额',
      actualVal: 528,
      targetVal: 500,
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
  ];

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
    <div className={styles.zlCostWrapper}>
      <Title title="COST" type="tooltip"></Title>
      <div className={styles.content}>
        {state.map((item, index) => {
          return (
            <Fragment key={item.title}>
              <Card
                title={item.title}
                headerStyle={headerStyle}
                bodyStyle={bodyStyle}
              >
                <div className={styles.info}>
                  <div className={styles.infoTitle}>
                    <span className={styles.actual}>{item.actualVal}</span>
                    <span className={styles.target}>
                      目标值：{item.targetVal}
                    </span>
                  </div>
                  <div className={styles.infoCharts}>
                    <BarLineChart
                      width="100%"
                      height="336px"
                      data={async () => {
                        let res = await item.chartsData;
                        return res;
                      }}
                      config={barLineChartConfig}
                    />
                  </div>
                </div>
              </Card>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default ZLChartsCost;
