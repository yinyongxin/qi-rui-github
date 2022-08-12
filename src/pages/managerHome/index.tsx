import React from 'react';
import ZLManagerContent from './cpns/ManagerContent';
import ZLManagerList from './cpns/ManagerList';

import styles from './styles.module.less';

const ZLManagerHome: React.FC = () => {
  // state & props

  // handle

  return (
    <div className={styles.zlManagerHomeWrapper}>
      <ZLManagerContent />
      <ZLManagerList />
    </div>
  );
};

export default ZLManagerHome;
