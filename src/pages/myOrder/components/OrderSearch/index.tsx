import React, { useRef, useState } from 'react';

import { Tabs } from 'qirui-digitization-ui';

import styles from './styles.module.less';

const ZLOrderSearch = () => {
  // state & props
  const [tabList, setTabList] = useState([
    {
      title: '待处理',
      // content: 'content1',
      current: 'key1',
      num: 20,
    },
    {
      title: '待审核',
      // content: () => 'content2',
      current: 'key2',
      num: 24,
    },
    {
      title: '已忽略',
      // content: () => 'content3',
      current: 'key3',
      disabled: true,
      num: 0,
    },
    {
      title: '已撤回',
      // content: () => 'content2',
      current: 'key4',
      num: 24,
    },
    {
      title: '已驳回',
      // content: () => 'content2',
      current: 'key5',
      num: 24,
    },
    {
      title: '已逾期',
      // content: () => 'content2',
      current: 'key6',
      num: 24,
    },
    {
      title: '已完成',
      // content: () => 'content2',
      current: 'key7',
      num: 24,
    },
  ]);

  // redux hooks

  // other hooks
  const TabsRef = useRef();

  return (
    <div className={styles.zlOrderSearch}>
      <div className={styles.title}>我的工单</div>
      <div className={styles.search}>
        <input type="text" className={styles.kw} placeholder="点击搜索工单" />
        <i className={'fa-solid fa-magnifying-glass ' + styles.icon}></i>
      </div>
      <div className={styles.status}>
        <Tabs ref={TabsRef} tabList={tabList} activeTab="key1" />
      </div>
    </div>
  );
};

export default ZLOrderSearch;
