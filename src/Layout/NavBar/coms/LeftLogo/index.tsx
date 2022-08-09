import { FC } from 'react';
import { ExempleComponentPropType } from './types';
import styles from './styles.module.less';

const LeftLogo: FC<ExempleComponentPropType> = () => {
  return (
    <div className={styles.leftLogo}>
      <div className={styles.logo}>
        <img src="./images/logo.png" alt="" />
      </div>
      <div className={styles.chery}>
        <img src="./svg/chery.svg" alt="" />
      </div>
      <div className={styles.control}>
        <img src="./svg/control.svg" alt="" />
      </div>
    </div>
  );
};

export default LeftLogo;
