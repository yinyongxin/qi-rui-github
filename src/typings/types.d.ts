/**
 * 用于存放全局公用类型
 */
 declare namespace RiRuiTypes {
  /**
   * 默认有四种状态 
   * default: 默认    success：成功    warnnig：警告     error；错误 
   */
  export type Status = 'default' | 'success' | 'warning' | 'error';
   /**
   * 默认有四种状态 
   * default: 默认    success：成功    warnnig：警告     error；错误 
   */
  export type Size ='default' | 'small' | 'large';

   /**
   * 默认两种主题色
   * dark: 深色 light：浅色
   */
  export type Theme = 'dark' | 'light';
   /**
   * 默认一种语言
   * 'zh-CN': 中文
   */
  export type Lang = 'zh-CN'
}