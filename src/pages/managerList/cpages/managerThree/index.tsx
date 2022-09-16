import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Card, Page } from 'qirui-digitization-ui';
import { BarChart, LineChart } from '@/components/PageCharts';
import { lineChartConfig, barChartConfig } from './config';

import styles from './styles.module.less';

const ZLManagerThree = () => {
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
  const toFour = () => {
    navigate('/manager/list/four');
  };
  const renderTemplate = () => {
    return (
      <div className={styles.types}>
        <h2 className={styles.title}>产品线指标概况</h2>
        <div className={styles.fen}>
          <span>日期选择</span>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.zlManagerThreeWrapper}>
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
            ],
          },
        }}
      >
        <div className={styles.charts}>
          <div className={styles.chartsOne}>
            <Card
              title="净资产收益率"
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
            >
              <div className={styles.in} onClick={toFour}>
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
      </Page>
    </div>
  );
};

export default ZLManagerThree;
