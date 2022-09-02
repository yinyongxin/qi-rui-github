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
  // 修改邮箱
  updateEmail: (data: any) => {
    return request({
      url: `/admin/sysUser/updateEmail`,
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })()
  },


  // 修改手机号
  updatePhoneNumber: request({
    url: `/admin/sysUser/updatePhoneNumber`,
    method: 'POST',
  }),
  // 获取手机验证吗
  getPhoneNumberCode: request({
    url: '/admin/sysUser/getPhoneNumberCode',
    method: 'POST',
  }),
  sysUser: (data: any) => {
    return request({
      url: `/admin/sysUser/${data.userId}`,
      method: 'GET',
    })()
  },
  uploadOneFile: (data: any) => {
    return request({
      url: '/oss/uploadOneFile',
      method: 'POST',
      data: data,
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      }
    })()
  },
};
