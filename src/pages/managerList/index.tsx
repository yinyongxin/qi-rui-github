import React from 'react';
import ZLManagerContent from './cpns/ManagerContent';
import ZLManagerLi from './cpns/ManagerLi';

import styles from './styles.module.less';

const ZLManagerList: React.FC = () => {
  // state & props

  // handle

  return (
    <div className={styles.zlManagerListWrapper}>
      <ZLManagerContent />
      <ZLManagerLi />
    </div>
  );
};

export default ZLManagerList;
