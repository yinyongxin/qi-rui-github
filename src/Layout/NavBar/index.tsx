import { Tabs } from 'qirui-digitization-ui';
import { TabType } from 'qirui-digitization-ui/dist/Tabs/Tabs/interface';
import LeftLogo from './coms/LeftLogo';
import RightInfo from './coms/RightInfo';
import styles from './styles.module.less';

const NavBar = () => {
  const tabsList: TabType[] = [
    {
      current: 'overview',
      title: 'OVERVIEW',
    },
    {
      current: 'metrics',
      title: 'METRICS',
    },
    {
      current: 'schematic',
      title: 'SCHEMATIC',
    },
    {
      current: 'insight to action',
      title: 'INSIGHT TO ACTION',
    },
  ];

  return (
    <div className={styles.navBar}>
      <LeftLogo />
      <Tabs type="card" tabList={tabsList} />
      <RightInfo />
    </div>
  );
};

export default NavBar;
