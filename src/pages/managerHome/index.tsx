import { useMobile } from '@/utils/hooks/useMobile';
import React from 'react';
import ZLManagerContent from './cpns/ManagerContent';
import ZLManagerList from './cpns/ManagerList';

import styles from './styles.module.less';

const ZLManagerHome: React.FC = () => {
  const isMobile = useMobile()

  return (
    <div className={styles.zlManagerHomeWrapper}>
      <div className={styles.left}>
        <ZLManagerContent />
      </div>
      {!isMobile && <div className={styles.right}>
        <ZLManagerList />

      </div>}

    </div>
  );
};

export default ZLManagerHome;
