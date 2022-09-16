import { useMobile } from '@/utils/hooks/useMobile';
import { useSize } from 'ahooks';
import { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './index.module.less';
const Content = () => {
  const isMobile = useMobile()
  return (
    <div className={`${styles.content} ${isMobile ? '' : styles.contentPadding}`} >
      <Outlet />
    </div>
  );
};

export default Content;
