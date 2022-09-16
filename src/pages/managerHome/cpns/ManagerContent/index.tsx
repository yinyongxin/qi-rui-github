import React from 'react';

import ZLManagerFinance from '../Finance';
import ZLManagerMarket from '../Market';
import ZLManagerEfficiency from '../Efficiency';
import ZLManagerCustomer from '../Customer';

import styles from './styles.module.less';
import { useMobile } from '@/utils/hooks/useMobile';

const ZLManagerContent = () => {
  const isMobile = useMobile()
  return (
    <div className={styles.zlManagerContentWrapper}>
      <div className={styles.header}>
        <h2 className={styles.title}>经营体决策</h2>
        <div className={styles.time}>分类</div>
      </div>
      <div className={isMobile ? styles.listMobile : styles.list}>
        <ZLManagerFinance />
        <ZLManagerMarket />
        <ZLManagerEfficiency />
        <ZLManagerCustomer />
      </div>
    </div>
  );
};

export default ZLManagerContent;
