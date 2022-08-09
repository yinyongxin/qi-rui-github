import React, { useRef, useState } from 'react';

import { Tabs } from 'qirui-digitization-ui';
import ZLContentList from '../ContentList';

import styles from './styles.module.less';

const ZLOrderContent = () => {
  // state & props
  const [tabList, setTabList] = useState([
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
  ]);

  // redux hooks

  // other hooks
  const TabsRef = useRef();

  return (
    <div className={styles.zlOrderContent}>
      <div className={styles.indexType + ' flex align-center'}>
        <span>指标类型：</span>
        <Tabs
          ref={TabsRef}
          tabList={tabList}
          activeTab="key1"
          type="miniCard"
        />
      </div>
      <ZLContentList />
    </div>
  );
};

export default ZLOrderContent;
