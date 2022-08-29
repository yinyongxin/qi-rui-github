import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Card } from 'qirui-digitization-ui';
import { BarChart, LineChart } from '@/components/PageCharts';
import { barChart2Config, barChartConfig, lineChartConfig } from './config';

import styles from './styles.module.less';

const ZLManagerFive = () => {
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
  const toSix = () => {
    navigate('/manager/list/six');
  };

  return (
    <div className={styles.zlManagerFiveWrapper}>
      <div className={styles.header}>
        <div className={styles.breadCrumb}>面包屑</div>
        <div className={styles.type}>
          <span className={styles.title}>主营业务净利润</span>
          <div className={styles.fen}>分类</div>
        </div>
      </div>
      <div className={styles.charts}>
        <div className={styles.chartsOne}>
          <Card
            title="总资产净利率"
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
        <div className={styles.chartsTwo}>
          <div className={styles.left}>
            <Card
              title="主营业务收入净额-成本总额"
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
            >
              <div className={styles.in} onClick={toSix}>
                <BarChart
                  width="100%"
                  height="327px"
                  data={[
                    [18, 12, 10, 15],
                    [28, 15, 20, 30],
                    [34, 18, 25, 32],
                    [40, 25, 30, 38],
                    [50, 30, 40, 40],
                    [55, 35, 45, 55],
                  ]}
                  config={barChart2Config}
                />
              </div>
            </Card>
          </div>
          <div className={styles.right}>
            <Card
              title="其他利润-所得税"
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
                    [50, 30, 40, 40],
                    [55, 35, 45, 55],
                  ]}
                  config={barChart2Config}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className={styles.chartsThree}>
          <div className={styles.box1}>
            <Card
              title="主营业务收入净额"
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
          <div className={styles.box2}>
            <Card
              title="成本总额"
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
        <div className={styles.chartsFour}>
          <div className={styles.box3}>
            <Card
              title="所得税"
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
          <div className={styles.box4}>
            <Card
              title="其他利润"
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

export default ZLManagerFive;
