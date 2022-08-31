import { FC, useEffect, useState } from 'react';
import { ExempleComponentPropType, OrderNotificationType } from './types';
import styles from './styles.module.less';
import { useLocale } from '@/utils/hooks';
const RightInfo: FC<ExempleComponentPropType> = () => {
  const [orderNotification, setOrderNotification] =
    useState<OrderNotificationType[]>();
  const [show, setShow] = useState(false);
  const locale = useLocale();
  const iconSvg = () => {
    return (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="32" height="32" fill="black" />
        <path d="M2 26H30V28H2V26Z" fill="#18FEFE" />
        <path
          d="M5 16C5 9.92487 9.92487 5 16 5C22.0751 5 27 9.92487 27 16V27H5V16Z"
          stroke="#18FEFE"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 30C18 31.1046 17.1046 32 16 32C14.8954 32 14 31.1046 14 30H18Z"
          fill="#18FEFE"
        />
        <path
          d="M14 2C14 0.89543 14.8954 0 16 0C17.1046 0 18 0.895431 18 2V6H14V2Z"
          fill="#18FEFE"
        />
        <path d="M2 26L4 24V26H2Z" fill="#18FEFE" />
        <path d="M30 26L28 24V26H30Z" fill="#18FEFE" />
      </svg>
    );
  };
  const addSvg = () => {
    return (
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 4.5V8H4.5V4.5H8V3.5H4.5V0H3.5V3.5H0V4.5H3.5Z"
          fill="#18FEFE"
        />
      </svg>
    );
  };
  const initData = () => {
    setOrderNotification([
      {
        title: '左前门槛返修痕',
        time: '2022-03-24 18:56:58',
      },
      {
        title: '左前门槛返修痕',
        time: '2022-03-24 18:56:58',
      },
      {
        title: '左前门槛返修痕',
        time: '2022-03-24 18:56:58',
      },
      {
        title: '左前门槛返修痕',
        time: '2022-03-24 18:56:58',
      },
      {
        title: '左前门槛返修痕',
        time: '2022-03-24 18:56:58',
      },
    ]);
  };
  useEffect(() => {
    initData();
  }, []);

  return (
    <div className={styles.rightInfo}>
      <div className={styles.workOrder}>
        <div>{addSvg()}</div>
        <div className={styles.text}>
          {locale('componentsLocale.custom.work.order')}
        </div>
      </div>
      <div className={styles.iconSvg}>
        {iconSvg()}
        <div className={styles.orderNotificationContent}>
          <div className={styles.orderNotification}>
            <div className={styles.text}>
              {locale('componentsLocale.work.order.notification')}
            </div>
            <div>
              {orderNotification?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${styles.orderItem} ${index != 0 ? styles.orderItemBorder : ''
                      }`}
                  >
                    <div className={styles.title}>{item.title}</div>
                    <div className={styles.time}>{item.time}</div>
                  </div>
                );
              })}
            </div>
            <div className={styles.more}>
              {locale('componentsLocale.view.more') + '>'}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.navImage}>
        <img src="/images/nav.png" alt="" width="100%" height="100%" />
        <div className={styles.userInfoContent}>
          <div className={styles.userInfo}>
            <div className={styles.front}>
              <div className={styles.avatar}>
                <img
                  src="images/info.png"
                  alt=""
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
              <div>
                <div className={styles.name}>鲁班</div>
                <div className={styles.account}>账号 ID: 18329005059</div>
                <div className={styles.job}>制造长</div>
              </div>
            </div>
            <div className={styles.information}>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="24" height="24" fill="#0F0F0F" />
                  <path
                    d="M4 2H15L20 7V22H4V2Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path d="M20 7H15V2" stroke="white" strokeWidth="1.5" />
                  <path d="M17 12H7" stroke="white" strokeWidth="1.5" />
                  <path d="M12 7H7" stroke="white" strokeWidth="1.5" />
                  <path d="M17 17H7" stroke="white" strokeWidth="1.5" />
                </svg>
              </div>
              <div>{locale('information.basic.information')}</div>
            </div>
            <div className={styles.accountSecurity}>
              <div>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 5.5L12 2L20 5.5V12C20 18.5 12 22 12 22C12 22 4 18.5 4 12V5.5Z"
                    stroke="#18FEFE"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M9 12L11 14L16 9"
                    stroke="#18FEFE"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>
              <div>{locale('information.account.security')}</div>
            </div>
            <div className={styles.loginOut} onClick={() => {
              console.log(1);

            }}>{locale('global.loginOut')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightInfo;
