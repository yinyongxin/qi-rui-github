import React, { useRef } from 'react';

import { Tabs } from 'qirui-digitization-ui';
import { TabType } from 'qirui-digitization-ui/dist/Tabs/Tabs/interface';
import ZLContentList from '../ContentList';

import styles from './styles.module.less';

const ZLOrderContent = () => {
  // state & props
  const tabList: TabType[] = [
    {
      title: '全部',
      current: 'key1',
    },
    {
      title: 'A',
      current: 'key2',
    },
    {
      title: 'B',
      current: 'key3',
      disabled: true,
    },
  ];

  // redux hooks

  // other hooks
  const TabsRef = useRef();

  // handles

  return (
    <div className={styles.zlOrderContentWrapper}>
      <div className={styles.header}>
        <div className={styles.indexType + ' flex align-center'}>
          <span>指标类型：</span>
          <Tabs
            ref={TabsRef}
            tabList={tabList}
            activeTab="key1"
            type="miniCard"
          />
        </div>
        <div className={styles.contType}>分类</div>
      </div>
      <ZLContentList />
    </div>
  );
};

export default ZLOrderContent;
