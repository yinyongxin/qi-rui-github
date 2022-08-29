import { request } from './base';

export const LoginApi = {
  // 获取验证码图片
  captchaImage: request({
    url: 'captchaImage',
    method: 'GET',
  }),
  // 登录
  sysUserLogin: request({
    url: 'admin/sysUser/login',
    method: 'POST',
  }),
  // 获取用户信息
  getInfo: request({
    url: '/admin/sysUser/getInfo',
    method: 'GET',
  }),
};
