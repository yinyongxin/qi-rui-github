import React from 'react';

import ZLManagerFinance from '../Finance';
import ZLManagerMarket from '../Market';
import ZLManagerEfficiency from '../Efficiency';
import ZLManagerCustomer from '../Customer';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import styles from './styles.module.less';

const ZLManagerContent = () => {
  return (
    <div className={styles.zlManagerContentWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>经营体决策</h2>
        <div className={styles.time}>日期选择</div>
      </div>
      <div className={styles.list}>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.left}>
            <ZLManagerFinance />
            <ZLManagerEfficiency />
          </div>
          <div className={styles.right}>
            <ZLManagerMarket />
            <ZLManagerCustomer />
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default ZLManagerContent;
