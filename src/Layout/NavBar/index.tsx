import { Tabs } from 'qirui-digitization-ui';
import { TabType } from 'qirui-digitization-ui/dist/Tabs/Tabs/interface';
import LeftLogo from './coms/LeftLogo';
import RightInfo from './coms/RightInfo';
import styles from './styles.module.less';
import {
  useNavigate,
  useLocation
} from 'react-router-dom'
import { useEffect } from 'react';

const NavBar = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const tabsList: TabType[] = [
    {
      current: '/myOrder',
      title: 'OVERVIEW',
    },
    {
      current: '/manager',
      title: 'METRICS',
    },
    {
      current: '/operator',
      title: 'SCHEMATIC',
    },
    {
      current: '/chartsHome',
      title: 'INSIGHT TO ACTION',
    },
  ];

  return (
    <div className={styles.navBar}>
      <LeftLogo />
      <Tabs
        type="card"
        activeTab={location.pathname}
        activeTabChange={(_key) => {
          console.log('_key', _key);
          navigate(_key);
        }}
        tabList={tabsList}
      />
      <RightInfo />
    </div>
  );
};

export default NavBar;
