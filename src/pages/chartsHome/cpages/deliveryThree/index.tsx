import React from 'react';

import { Breadcrumb, Card } from 'qirui-digitization-ui';
import { BarLineChart } from '@/components/PageCharts';

import styles from './styles.module.less';
import { barLineChartConfig } from './config';

const ZLDeliveryThree = () => {
  // state & props
  const state = [
    {
      title: '各班次工艺整车产量',
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10],
        [36, 32, 25, 33, 40, 35, 28],
      ],
    },
    {
      title: '各工艺产线班次员工数量',
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10],
        [36, 32, 25, 33, 40, 35, 28],
      ],
    },
    {
      title: '各工艺班次KD/ 备件产量',
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10],
        [36, 32, 25, 33, 40, 35, 28],
      ],
    },
    {
      title: '各工艺产线班次员工出勤及加班时长',
      chartsData: [
        [38, 32, 25, 33, 40, 35, 10],
        [36, 32, 25, 33, 40, 35, 28],
      ],
    },
  ];

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
    <div className={styles.zlDeliveryThreeWrapper}>
      <div className={styles.main}>
        <div className={styles.breadCrumb}>
          <Breadcrumb
            list={[
              {
                title: '透明指标',
                path: '/chartsHome',
              },
              {
                title: '二级指标',
                path: '/delivery/two',
              },
              {
                title: '三级指标',
                path: '/delivery/three',
              },
            ]}
          />
        </div>
        <div className={styles.type}>
          <h2 className={styles.title}>制造HPV</h2>
          <div className={styles.tp}>分类</div>
        </div>
        <div className={styles.chartsBox}>
          <BarLineChart
            width="100%"
            height="336px"
            data={[
              [38, 32, 25, 33, 40, 35, 10],
              [36, 32, 25, 33, 40, 35, 28],
            ]}
            config={barLineChartConfig}
          />
        </div>
      </div>
      <div className={styles.about}>
        <h2 className={styles.aboutTitle}>三级指标关联内容</h2>
        <div className={styles.aboutCharts}>
          {state.map((item, index) => {
            return (
              <div key={item.title}>
                <Card
                  title={item.title}
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
        </div>
      </div>
    </div>
  );
};

export default ZLDeliveryThree;
