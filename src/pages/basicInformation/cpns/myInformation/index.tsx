import ImageComponent from '@/components/ImageComponent';
import { useAppDispatch, useAppSelector, useLocale } from '@/utils/hooks';
import ChangeImageModal from './changeImageModal';
import ChangeEmailPhone from './changeEmailPhone';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.less';
import { InfoStateType, ModalType } from '../types';
const Info = () => {
  const locale = useLocale();
  const ModalRef = useRef<ModalType>();
  const emailPhoneRef = useRef<ModalType>();
  const [infoData, setInfoData] = useState<InfoStateType>();
  const [image, setImage] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const dispatch = useAppDispatch();
  const { info } = useAppSelector((state) => state.user);
  const getInfo = () => {
    setInfoData({
      name: info?.username,
      entryTime: info?.inductionTime ?? "暂无",
      jobTitle: '制造长',
      JobNumber: info.jobNumber ?? "暂无",
      workingYears: info.jobAge ?? "暂无",
    });
    setImage(info.avatar);
    setPhone(info.phoneNumber)
    setEmail(info.email)
  };
  useEffect(() => {
    getInfo();
  }, [info]);
  // 头像弹框
  const changeImage = () => {
    ModalRef.current?.init();
  };
  const modifyChange = (title: string) => {
    emailPhoneRef.current?.init(title);
  };
  return (
    <div className={styles.basicInformation}>
      <div className={styles.breadcrumbs}>{locale('information.account.center')} / {locale('information.basic.information')}</div>
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
          <div className={styles.center}>{email}</div>
          <div
            className={styles.change}
            onClick={() => {
              modifyChange(locale(`information.modify.email`));
            }}
          >
            {locale(`information.modify.email`)}
          </div>
        </div>
      </div>
      <div className={styles.phone}>
        <div className={styles.left}>{locale(`information.cell.phone`)}</div>
        <div className={styles.right}>
          <div className={styles.center}>{phone}</div>
          <div
            className={styles.change}
            onClick={() => {
              modifyChange(locale(`information.modify.cell.phone`));
            }}
          >
            {locale(`information.modify.cell.phone`)}
          </div>
        </div>
      </div>
      <div>
        {image && <ChangeImageModal ref={ModalRef} image={image}></ChangeImageModal>}
      </div>
      <div>
        <ChangeEmailPhone ref={emailPhoneRef}></ChangeEmailPhone>
      </div>
    </div>
  );
};
export default Info;
