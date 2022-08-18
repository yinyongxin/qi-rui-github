import React, { Fragment, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Card, Title } from 'qirui-digitization-ui';
import { BarLineChart } from '@/components/PageCharts';

import styles from './styles.module.less';
import { barLineChartConfig } from './config';

const ZLChartsDelivery = () => {
  // state & props
  const state = [
    {
      title: '制造HPV',
      actualVal: 528,
      targetVal: 500,
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '订单交付影响率',
      actualVal: 528,
      targetVal: 500,
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: 'OTD',
      actualVal: 528,
      targetVal: 500,
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 20, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '新品计划准确率',
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
  const navigate = useNavigate();

  // handles
  const headerStyle = {
    color: 'var(--design-neutral-color-1)',
    paddingTop: '12px',
    paddingBottom: '16px',
  };
  const bodyStyle = {
    padding: '16px',
  };
  const handleClick = () => {
    navigate('/delivery/two');
  };

  return (
    <div className={styles.zlDeliveryWrapper}>
      <Title title="DELIVERY" type="tooltip"></Title>
      <div className={styles.content}>
        {state.map((item, index) => {
          return (
            <div key={item.title} onClick={handleClick}>
              <Card
                title={item.title}
                width={377}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ZLChartsDelivery;
