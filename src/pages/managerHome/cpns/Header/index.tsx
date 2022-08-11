import React from 'react';

import styles from './styles.module.less';

const ZLManagerHeader = () => {
  return (
    <div className={styles.managerHeader}>
      <div className={styles.title}>经营体决策</div>
      <div className={styles.type}>分类</div>
    </div>
  );
};

export default ZLManagerHeader;
