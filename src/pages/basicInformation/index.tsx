import ImageComponent from '@/components/ImageComponent';
import { useLocale } from '@/utils/hooks';
import { SideMenu } from 'qirui-digitization-ui';
import {
  MenuTreeItemType,
  SidePropsType,
} from 'qirui-digitization-ui/dist/SideMenu/interface';
import { useEffect, useState } from 'react';
import Info from './cpns';
import styles from './styles.module.less';

const basicInformation = () => {
  const locale = useLocale();
  const [selectKey, setSelectKey] = useState<string>('info');
  const menuTree: MenuTreeItemType<SidePropsType>[] = [
    {
      title: locale('information.basic.information'),
      activeKey: 'info',
      icon: 'bars',
    },
    {
      title: locale('information.my.studies'),
      activeKey: 'study',
      icon: 'bars',
    },
  ];
  const changeTab = (e) => {
    console.log(e);

    setSelectKey(e);
  };
  return (
    <div className={styles.basicInformation}>
      <div className={styles.tabInformation}>
        <div className={styles.accountCenter}>
          {locale('information.account.center')}
        </div>
        <div className={styles.sideMenu}>
          <SideMenu
            defaultActiveKeys={[selectKey]}
            menuTree={menuTree}
            width={240}
            activeMenuItemChange={(menuItems) => {
              changeTab(menuItems[0] as string);
            }}
          ></SideMenu>
        </div>
      </div>
      <Info></Info>
    </div>
  );
};
export default basicInformation;
