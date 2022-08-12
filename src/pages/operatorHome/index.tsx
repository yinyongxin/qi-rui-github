import React from 'react';
import ZLOperatorContent from './cpns/OperatorContent';
import ZLOperatorList from './cpns/OperatorList';

import styles from './styles.module.less';

const ZLOperatorHome: React.FC = () => {
  // state & props

  // handle

  return (
    <div className={styles.zlOperatorHomeWrapper}>
      <ZLOperatorContent />
      <ZLOperatorList />
    </div>
  );
};

export default ZLOperatorHome;
