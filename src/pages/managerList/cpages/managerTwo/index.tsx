import React from 'react';

import { useNavigate } from 'react-router-dom';
import { Card, Page } from 'qirui-digitization-ui';
import { BarLineChart } from '@/components/PageCharts';
import { barLineChartConfig } from './config';

import styles from './styles.module.less';

const ZLManagerTwo = () => {
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
  const toThree = () => {
    navigate('/manager/list/three');
  };
  const renderDescriptions = () => {
    return (
      <div className={styles.desc}>
        <div className={styles.left}>
          <span>指标描述：</span>
          <span>
            净资产收益率好于同期、但与目标比有差距；xxx部门净资产收益率最高且优于同期；国内净资产收益率高于国际且达成目标；新能源利润优于传统车，切大于同期净资产收益率；xxx产品线净资产收益率最高且达成目标，xxx产品线净资产收益率最低；
          </span>
        </div>
        <div className={styles.right}>
          <div className={styles.date}>日期选择</div>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.zlManagerTwoWrapper}>
      <Page
        pageHeader={{
          descriptions: renderDescriptions(),
          title: '净资产收益率',
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
            ],
          },
        }}
      >
        <div className={styles.charts}>
          <BarLineChart
            width="100%"
            height="336px"
            data={[
              [220, 200, 300, 420],
              [410, 280, 410, 420],
              [250, 550, 220, 280],
            ]}
            config={barLineChartConfig}
          />
        </div>
        <div className={styles.about}>
          <div className={styles.aboutTitle}>
            <span>指标关联内容</span>
          </div>
          <div className={styles.aboutCharts}>
            <div className={styles.chartOne}>
              <Card
                title="品牌维度"
                headerStyle={headerStyle}
                bodyStyle={bodyStyle}
              >
                <div className={styles.in}>
                  <BarLineChart
                    width="100%"
                    height="336px"
                    data={[
                      [220, 200, 300, 420],
                      [410, 280, 410, 420],
                      [250, 550, 220, 280],
                    ]}
                    config={barLineChartConfig}
                  />
                </div>
              </Card>
            </div>
            <div className={styles.chartTwo}>
              <Card
                title="产品线维度"
                headerStyle={headerStyle}
                bodyStyle={bodyStyle}
              >
                <div className={styles.in} onClick={toThree}>
                  <BarLineChart
                    width="100%"
                    height="336px"
                    data={[
                      [220, 200, 300, 420],
                      [410, 280, 410, 420],
                      [250, 550, 220, 280],
                    ]}
                    config={barLineChartConfig}
                  />
                </div>
              </Card>
            </div>
            <div className={styles.chartThree}>
              <Card
                title="国内国际"
                headerStyle={headerStyle}
                bodyStyle={bodyStyle}
              >
                <div className={styles.in}>
                  <BarLineChart
                    width="100%"
                    height="336px"
                    data={[
                      [220, 200, 300, 420],
                      [410, 280, 410, 420],
                      [250, 550, 220, 280],
                    ]}
                    config={barLineChartConfig}
                  />
                </div>
              </Card>
            </div>
            <div className={styles.chartFour}>
              <Card
                title="国内国际"
                headerStyle={headerStyle}
                bodyStyle={bodyStyle}
              >
                <div className={styles.in}>
                  <BarLineChart
                    width="100%"
                    height="336px"
                    data={[
                      [220, 200, 300, 420],
                      [410, 280, 410, 420],
                      [250, 550, 220, 280],
                    ]}
                    config={barLineChartConfig}
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

export default ZLManagerTwo;
