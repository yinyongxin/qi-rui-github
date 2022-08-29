import React, { FC, useEffect, useState } from 'react';
import ImageComponent from '@/components/ImageComponent';
import { useAppDispatch, useAppSelector, useLocale } from '@/utils/hooks';
import styles from './styles.module.less';
import { Input, Form, FormItem, Message } from 'qirui-digitization-ui';
import { LoginApi } from '@/services';
import { CodeInfoType } from './type';
import { userActions } from '@/store/userSlice';
import { useNavigate } from 'react-router-dom';


const Login: FC = () => {
  const [codeInfo, setCodeInfo] = useState<CodeInfoType>()
  const [form] = Form.useForm()
  const locale = useLocale();
  const dispatch = useAppDispatch();
  let navigate = useNavigate()
  const { info } = useAppSelector((state) => state.user);

  const getCodeImage = async () => {
    const { data } = await LoginApi.captchaImage()
    setCodeInfo(data)
  }
  const login = async () => {
    const { data } = await LoginApi.sysUserLogin({
      ...form.getFields(),
      uuid: codeInfo?.uuid
    })
    Message.success('登录成功')
    localStorage.setItem('token', JSON.stringify(data?.token))
    const res = await LoginApi.getInfo()
    localStorage.setItem('user', JSON.stringify(res.data.user))
    dispatch(userActions.updater(res.data.user))
    navigate('/home')


  }
  useEffect(() => {
    getCodeImage()
  }, [])
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
          <Form form={form}>
            <FormItem name='username'>
              <div className={styles.userName}>
                <div className={styles.input}> <Input inputAttributes={{ placeholder: '请输入用户名', autoComplete: "off" }} /> </div>
              </div>
            </FormItem>
            <FormItem name='password'>
              <div className={styles.passWordName}>
                <div className={styles.input}> <Input inputAttributes={{ placeholder: '请输入密码', autoComplete: "off" }} /></div>
              </div>
            </FormItem>
            <FormItem name='code'>
              <div className={styles.codeLogin}>
                <div className={styles.input}><Input inputAttributes={{ placeholder: '请输入验证码', autoComplete: "off" }} suffix={<div className={styles.codeImage} onClick={() => {
                  getCodeImage()

                }}>
                  <img src={'data:image/png;base64,' + codeInfo?.img} alt="" style={{ width: '100%', height: '100%' }} />
                </div>} /></div>

              </div>
            </FormItem>
          </Form>
          <div className={styles.loginButton} onClick={() => {
            login()
          }}>
            登录
          </div>
          {/* <div className={styles.code}>
            <ImageComponent src="./images/code.png" />
          </div>
          <div className={styles.codeWeChat}>
            {locale('dms.scan.code.weChat')}
          </div> */}
        </div>
      </div>
    </div >
  );
};
export default Login;
