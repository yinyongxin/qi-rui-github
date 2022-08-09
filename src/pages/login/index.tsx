import ImageComponent from '@/components/ImageComponent';
import { useLocale } from '@/utils/hooks';
import styles from './styles.module.less';

const Login = () => {
  const locale = useLocale();
  return (
    <div className={styles.login}>
      {/* {locale(['global.login'])} */}
      <div className={styles.nav}>
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
      <div className={styles.content}>
        <div className={styles.loginCover}>
          <div className={styles.title}>{locale('login.scan.code')}</div>
          <div className={styles.code}>
            <ImageComponent src="./images/code.png" />
          </div>
          <div className={styles.codeWeChat}>
            {locale('dms.scan.code.weChat')}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
