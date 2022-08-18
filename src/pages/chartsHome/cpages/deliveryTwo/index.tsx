import React, { Fragment } from 'react';

import { Card } from 'qirui-digitization-ui';
import { useNavigate } from 'react-router-dom';
import { BarLineChart } from '@/components/PageCharts';

import styles from './styles.module.less';
import { barLineChartConfig } from './config';

const ZLDeliveryTwo = () => {
  // state & props
  const state = [
    {
      title: '[冲压]制造HPV',
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 22, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '[焊装]制造HPV',
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 22, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '[涂装]制造HPV',
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 22, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '[总装]制造HPV',
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 22, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
    {
      title: '[KD]制造HPV',
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10, 22, 31, 32, 38, 42],
        [36, 32, 25, 33, 40, 35, 28, 24, 31, 32, 38, 42],
      ],
    },
  ];

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
    navigate('/delivery/three');
  };

  return (
    <div className={styles.zlDeliveryTwoWrapper}>
      <div className={styles.breadCrumb}>面包屑</div>
      <div className={styles.type}>
        <h2 className={styles.titles}>制造HPV</h2>
        <div className={styles.tp}>分类</div>
      </div>
      <div className={styles.twoCharts}>
        {state.map((item, index) => {
          return (
            <div key={item.title} onClick={handleClick}>
              <Card
                title={item.title}
                width={624}
                headerStyle={headerStyle}
                bodyStyle={bodyStyle}
              >
                <div className={styles.info}>
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
              </Card>
            </div>
          );
        })}
        {/* <BarLineChart
          width="100%"
          height="336px"
          data={[
            [38, 32, 25, 33, 40, 35, 10],
            [36, 32, 25, 33, 40, 35, 28],
          ]}
          config={barLineChartConfig}
        /> */}
      </div>
    </div>
  );
};

export default ZLDeliveryTwo;
