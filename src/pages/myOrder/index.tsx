import React from 'react';

import ZLOrderSearch from './cpns/OrderSearch';
import ZLOrderContent from './cpns/OrderContent';

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
