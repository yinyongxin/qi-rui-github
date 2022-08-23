import React from 'react';

import { Card } from 'qirui-digitization-ui';
import {
  BarChart,
  BarLineChart,
  LineChart,
  PieChart,
} from '@/components/PageCharts';
import {
  barLineChartConfig,
  lineChartConfig,
  pieChartConfig,
  barLine2ChartConfig,
  barLine3ChartConfig,
  barChartConfig,
  barChart2Config,
  barChart3Config,
  barChart4Config,
} from './config';

import styles from './styles.module.less';

const ZLOperatorItemCharts = () => {
  // state & props

  // other hooks

  // handles
  const headerStyle = {
    height: '48px',
    color: 'var(--design-neutral-color-1)',
  };
  const bodyStyle = {
    padding: 0,
  };

  return (
    <div className={styles.zlOperatorItemWrapper}>
      <div className={styles.head}>
        <div className={styles.breadCrumb}>
          <span>面包屑</span>
        </div>
        <div className={styles.types}>
          <h2 className={styles.title}>利润总额</h2>
          <div className={styles.fen}>
            <span>分类</span>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.chartsOne}>
          <div className={styles.left}>
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
          <div className={styles.right}>
            <Card
              title="利润总额"
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
                  ]}
                  config={lineChartConfig}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className={styles.chartsTwo}>
          <div className={styles.left}>
            <Card
              title="品产品线占品牌的比重"
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
            >
              <div className={styles.in}>
                <PieChart
                  width="100%"
                  height="322px"
                  data={[
                    { value: 1048, name: '模块一' },
                    { value: 735, name: '模块二' },
                    { value: 580, name: '模块三' },
                    { value: 484, name: '模块四' },
                  ]}
                  config={pieChartConfig}
                />
              </div>
            </Card>
          </div>
          <div className={styles.center}>
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
                    [220, 200],
                    [410, 280],
                    [250, 550],
                  ]}
                  config={barLine2ChartConfig}
                />
              </div>
            </Card>
          </div>
          <div className={styles.right}>
            <Card
              title="燃油类型"
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
            >
              <div className={styles.in}>
                <BarLineChart
                  width="100%"
                  height="336px"
                  data={[
                    [220, 200],
                    [410, 280],
                    [250, 550],
                  ]}
                  config={barLine3ChartConfig}
                />
              </div>
            </Card>
          </div>
        </div>
        <div className={styles.chartsThree}>
          <div className={styles.left}>
            <Card
              title="国内国际"
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
            >
              <div className={styles.in}>
                <BarChart
                  width="100%"
                  height="270px"
                  data={[[10, 12, 23, 45]]}
                  config={barChartConfig}
                />
              </div>
            </Card>
          </div>
          <div className={styles.center1}>
            <Card
              title="国内销售区域"
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
            >
              <div className={styles.in}>
                <BarChart
                  width="100%"
                  height="270px"
                  data={[[10, 12, 23, 45]]}
                  config={barChart2Config}
                />
              </div>
            </Card>
          </div>
          <div className={styles.center2}>
            <Card
              title="国际销售区域"
              headerStyle={headerStyle}
              bodyStyle={bodyStyle}
            >
              <div className={styles.in}>
                <BarChart
                  width="100%"
                  height="270px"
                  data={[[10, 12, 23, 45]]}
                  config={barChart3Config}
                />
              </div>
            </Card>
          </div>
          <div className={styles.right}>
            <Card title="车型" headerStyle={headerStyle} bodyStyle={bodyStyle}>
              <div className={styles.in}>
                <BarChart
                  width="100%"
                  height="270px"
                  data={[[10, 12, 23, 45]]}
                  config={barChart4Config}
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZLOperatorItemCharts;
