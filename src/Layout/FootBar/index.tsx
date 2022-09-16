import { Icon, Tabs } from 'qirui-digitization-ui';
import { TabType } from 'qirui-digitization-ui/dist/Tabs/Tabs/interface';
import styles from './styles.module.less';

import {
  useNavigate,
  useLocation
} from 'react-router-dom'
import { useEffect } from 'react';

const FootBar = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const tabsList = [
    {
      current: '/myOrder',
      title: '首页',
      icon: 'house'

    },
    {
      current: '/manager',
      title: '工单',
      icon: 'list'
    },
    {
      current: '/operator',
      title: '发布工单',

    },
    {
      current: '/chartsHome',
      title: '通知',
      icon: 'comment'
    },
    {
      current: '/chartsHome',
      title: '我的',
      icon: 'user'
    },
  ];

  return (
    <>
      <div className={styles.footBar}>

        {tabsList.map((item, index) => {
          return <div key={index} className={`${styles.listItem} ${index === 2 ? styles.ticketPost : ''}`} >
            {item.icon && <div style={{ paddingBottom: '5px' }}>
              <Icon icon={item.icon}></Icon>
            </div>}
            <div>{item.title}</div>
          </div>
        })}
      </div>
    </>


  );
};

export default FootBar;
