import ImageComponent from '@/components/ImageComponent';
import { useLocale } from '@/utils/hooks';
import { SideMenu } from 'qirui-digitization-ui';
import { useEffect, useState } from 'react';
import styles from './styles.module.less';
import { InfoStateType } from './types';
import MyInformation from './myInformation';
const InfoRight = () => {
  const locale = useLocale();

  return (
    <div className={styles.rightInformation}>
      <MyInformation></MyInformation>
    </div>
  );
};
export default InfoRight;
