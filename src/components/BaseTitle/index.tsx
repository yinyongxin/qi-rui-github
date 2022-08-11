import React from 'react';

import { IProps } from './types';

import styles from './styles.module.less';

const BaseTitle: React.FC<IProps> = (props) => {
  const { title } = props;
  return (
    <div className={styles.baseTitle}>
      <span>{title}</span>
      <div className={styles.box}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default BaseTitle;
