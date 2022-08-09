import React from 'react';

import ZLOrderSearch from './components/OrderSearch';
import ZLOrderContent from './components/OrderContent';

import styles from './styles.module.less';

const ZLMyOrder = () => {
  return (
    <div className={styles.zlMyOrder}>
      <ZLOrderSearch />
      <ZLOrderContent />
    </div>
  );
};

export default ZLMyOrder;
