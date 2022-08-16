import ImageComponent from '@/components/ImageComponent';
import { useLocale } from '@/utils/hooks';
import ChangeImageModal from './changeImageModal';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.less';
import { InfoStateType, ModalType } from '../types';
const Info = () => {
  const locale = useLocale();
  const ModalRef = useRef<ModalType>();
  const [infoData, setInfoData] = useState<InfoStateType>();
  const [image, setImage] = useState<string>('');
  const getInfo = () => {
    setInfoData({
      name: '鲁班',
      entryTime: '2018.5.30',
      jobTitle: '制造长',
      JobNumber: 'QR10924',
      workingYears: 4,
    });
    setImage('./images/info.png');
  };
  useEffect(() => {
    getInfo();
  }, []);
  // 头像弹框
  const changeImage = () => {
    ModalRef.current?.init();
  };

  return (
    <div className={styles.basicInformation}>
      <div className={styles.breadcrumbs}>账号中心 / 基本资料</div>
      <div className={styles.info}>
        <div className={styles.avatar}>
          <ImageComponent src={image}></ImageComponent>
          <div className={styles.cover} onClick={changeImage}>
            {locale('information.modify.avatar')}
          </div>
        </div>
        <div className={styles.introduceOut}>
          <div className={styles.introduce}>
            {infoData &&
              (Object.keys(infoData) as (keyof InfoStateType)[]).map(
                (item, index) => {
                  return (
                    <div className={styles.centerName} key={item}>
                      <div className={styles.keyName}>
                        {locale(`information.${item}`)}:
                      </div>
                      <div className={styles.valueName}>{infoData[item]}</div>
                    </div>
                  );
                }
              )}
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.contact}>
        {locale(`information.contact.information`)}
      </div>
      <div className={styles.email}>
        <div className={styles.left}>{locale(`information.email`)}</div>
        <div className={styles.right}>
          <div className={styles.center}>luban2022@chery.com</div>
          <div className={styles.change}>
            {locale(`information.modify.email`)}
          </div>
        </div>
      </div>
      <div className={styles.phone}>
        <div className={styles.left}>{locale(`information.cell.phone`)}</div>
        <div className={styles.right}>
          <div className={styles.center}>18852809286</div>
          <div className={styles.change}>
            {locale(`information.modify.cell.phone`)}
          </div>
        </div>
      </div>
      <div>
        <ChangeImageModal ref={ModalRef}></ChangeImageModal>
      </div>
    </div>
  );
};
export default Info;
