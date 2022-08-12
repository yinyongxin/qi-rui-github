import React from 'react';

import { HeaderProps } from './types';

import styles from './styles.module.less';

const ZLCardHeader: React.FC<HeaderProps> = (props) => {
  // state & props
  const { title, price } = props;

  return (
    <div className={styles.zlCardHeaderWrapper}>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <div className={styles.price}>
        <span>{price}</span>
      </div>
    </div>
  );
};

export default ZLCardHeader;
