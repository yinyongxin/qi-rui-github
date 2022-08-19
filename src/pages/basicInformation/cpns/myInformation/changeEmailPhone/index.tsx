import React, {
  FC,
  forwardRef,
  ForwardRefRenderFunction,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { useLocale } from '@/utils/hooks';
import { Modal, Steps, Input } from 'qirui-digitization-ui';
import { ModalHandle } from 'qirui-digitization-ui/dist/Modal/interface';
import styles from './index.module.less';
import { ModalType } from '../../types';
const { Step } = Steps;

const ModalEmailPhone: ForwardRefRenderFunction<ModalType, any> = (
  props,
  ref
) => {
  const locale = useLocale();
  const [title, setTitle] = useState('');
  const ModalRef = useRef<ModalHandle>();
  const [current, setCurrent] = useState(1);
  const [time, setTime] = useState<number>(60);
  const timeRef = useRef<any>();
  const init = (str?: string) => {
    setTitle(str ?? '');
    ModalRef.current?.open();
  };
  const clickInterval = () => {
    clearInterval(timeRef.current);
    if (time && time > 0) {
      timeRef.current = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    }
  };
  useEffect(() => {
    if (time === 0) {
      clearInterval(timeRef.current);
      setTime(60);
    }
  }, [time]);

  useImperativeHandle<any, ModalType>(ref, () => ({
    init,
  }));
  return (
    <Modal
      title={title}
      ref={ModalRef}
      width={906}
      mianStyle={{
        height: '402px',
        paddingLeft: '48px',
        boxSizing: 'border-box',
        paddingTop: '32px',
      }}
      cancelText={locale('information.cancel')}
      okText={locale('information.next.step')}
    >
      <div className={styles.step}>
        <Steps current={current}>
          <Step title={locale('information.verify.identidy')}></Step>
          <Step
            title={
              title === locale(`information.modify.email`)
                ? locale('information.set.newMailbox')
                : locale('information.set.newPhone')
            }
          ></Step>
          <Step title={locale('information.successfully.modified')}></Step>
        </Steps>
      </div>
      {current === 1 && (
        <div className={styles.codeContent}>
          <div
            className={styles.code}
            onClick={() => {
              setCurrent(2);
            }}
          >
            <img src="images/code.png" alt="" width="100%" height="100%" />
          </div>
          <div className={styles.codeTitle}>
            {locale('information.use.enterprise.scan')}
          </div>
        </div>
      )}
      {title === locale(`information.modify.email`) && current === 2 && (
        <div className={styles.input}>
          <Input
            width={400}
            height={48}
            placeholder={locale('information.enter.newEmail')}
          ></Input>
        </div>
      )}
      {title === locale(`information.modify.cell.phone`) && current === 2 && (
        <div className={styles.phoneInput}>
          <div className={styles.phone}>
            <Input
              width={400}
              height={48}
              placeholder={locale('information.enter.phone')}
            ></Input>
          </div>
          <div className={styles.code}>
            <Input
              width={400}
              height={48}
              placeholder={locale('information.enter.code')}
              suffix={
                <div
                  className={styles.suffix}
                  onClick={() => {
                    if (time === 60) {
                      clickInterval();
                    }
                  }}
                >
                  {time === 60
                    ? locale('information.get.verification.code')
                    : time}
                </div>
              }
            ></Input>
          </div>
        </div>
      )}
      {current === 3 && (
        <div className={styles.currentThree}>
          <div className={styles.right}>
            <svg
              width="88"
              height="88"
              viewBox="0 0 88 88"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="87"
                height="87"
                rx="43.5"
                stroke="#18FEFE"
              />
              <path
                d="M63.6452 28.1875H60.2126C59.7314 28.1875 59.2747 28.4085 58.98 28.7866L38.7331 54.4353L29.0247 42.1339C28.8778 41.9475 28.6906 41.7967 28.4771 41.6929C28.2636 41.5892 28.0294 41.5351 27.7921 41.5348H24.3595C24.0305 41.5348 23.8488 41.9129 24.0501 42.1683L37.5005 59.2085C38.1291 60.004 39.3372 60.004 39.9706 59.2085L63.9546 28.8161C64.1559 28.5656 63.9742 28.1875 63.6452 28.1875Z"
                fill="#18FEFE"
              />
            </svg>
          </div>
          <div className={styles.modification}>
            {locale('information.completed.email.modification')}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default forwardRef<ModalType, any>(ModalEmailPhone);
