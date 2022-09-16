import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Card, Page } from 'qirui-digitization-ui';
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
  const renderTemplate = () => {
    return (
      <div className={styles.types}>
        <h2 className={styles.title}>成本总额</h2>
        <div className={styles.fen}>
          <span>日期选择</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.zlManagerSixWrapper}>
      <Page
        pageHeader={{
          descriptions: renderTemplate(),
          breadcrumb: {
            list: [
              {
                title: '首页',
                path: '/manager',
              },
              {
                title: '净资产收益率',
                path: '/manager/list/two',
              },
              {
                title: '产品线指标概况',
                path: '/manager/list/three',
              },
              {
                title: '总资产净利率',
                path: '/manager/list/four',
              },
              {
                title: '主营业务净利润',
                path: '/manager/list/five',
              },
              {
                title: '成本总额',
                path: '/manager/list/six',
              },
            ],
          },
        }}
      >
        <div className={styles.charts}>
          <Card
            title="成本总额"
            headerStyle={headerStyle}
            bodyStyle={bodyStyle}
          >
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
      </Page>
    </div>
  );
};

export default ZLManagerSix;
