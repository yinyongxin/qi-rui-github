import React, { useRef, useState } from 'react';

import { Icon, Tabs } from 'qirui-digitization-ui';
import { TabType } from 'qirui-digitization-ui/dist/Tabs/Tabs/interface';

import styles from './styles.module.less';

const ZLOrderSearch = () => {
  // state & props
  const tabList: TabType[] = [
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
  ];

  // redux hooks

  // other hooks
  const tabsRef = useRef();

  // handles

  return (
    <div className={styles.zlOrderSearchWrapper}>
      <div className={styles.title}>
        <span>我的工单</span>
      </div>
      <div className={styles.search}>
        <input type="text" className={styles.kw} placeholder="点击搜索工单" />
        <div className={styles.icon}>
          <Icon icon="angles-down" />
        </div>
      </div>
      <div className={styles.status}>
        <Tabs ref={tabsRef} tabList={tabList} activeTab="key1" />
      </div>
    </div>
  );
};

export default ZLOrderSearch;
