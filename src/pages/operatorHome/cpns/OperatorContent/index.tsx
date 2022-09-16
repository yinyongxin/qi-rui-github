import React from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ZLOperatorFinance from '../Finance';
import ZLOperatorMarket from '../Market';
import ZLOperatorEfficiency from '../Efficiency';
import ZLOperatorCustomer from '../Customer';

import styles from './styles.module.less';

const ZLOperatorContent = () => {
  return (
    <div className={styles.zlOperatorContentWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>经营体决策</h2>
        <div className={styles.time}>分类</div>
      </div>
      <div className={styles.list}>
        <DndProvider backend={HTML5Backend}>
          <div className={styles.left}>
            <ZLOperatorFinance />
            <ZLOperatorEfficiency />
          </div>
          <div className={styles.right}>
            <ZLOperatorMarket />
            <ZLOperatorCustomer />
          </div>
        </DndProvider>
      </div>
    </div>
  );
};

export default ZLOperatorContent;
