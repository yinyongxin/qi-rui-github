import React from 'react';

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
        <ZLOperatorFinance />
        <ZLOperatorMarket />
        <ZLOperatorEfficiency />
        <ZLOperatorCustomer />
      </div>
    </div>
  );
};

export default ZLOperatorContent;
