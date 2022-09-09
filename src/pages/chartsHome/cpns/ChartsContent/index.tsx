import React from 'react';

import { Tabs } from 'qirui-digitization-ui';
import ZLChartsQuality from '../Quality';
import ZLChartsCost from '../Cost';
import ZLChartsDelivery from '../Delivery';
import ZLChartsFinance from '../Finance';
import ZLManagement from '../Management';

import styles from './styles.module.less';

const ZLManagerContent = () => {
  return (
    <div className={styles.zlManagerContentWrapper}>
      <div className={styles.header}>
        <div className={styles.title}>
          <Tabs
            tabList={[
              {
                title: '选中标签',
                current: 'key1',
              },
              {
                title: '可选标签',
                current: 'key2',
              },
              {
                title: '不可选中标签',
                current: 'key3',
                disabled: true,
              },
            ]}
            activeTab="key2"
            type="text"
          />
        </div>
        <div className={styles.time}>日期选择</div>
      </div>
      <div className={styles.list}>
        <div className={styles.left}>
          <ZLChartsQuality />
          <ZLChartsDelivery />
          <ZLChartsFinance />
        </div>
        <div className={styles.right}>
          <ZLChartsCost />
          <ZLManagement />
        </div>
      </div>
    </div>
  );
};

export default ZLManagerContent;
