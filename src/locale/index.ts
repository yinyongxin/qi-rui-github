import zh from './zh-CN';
const i18n: Record<string, any> = {
  'zh-CN': zh,
};

export type LocaleType = keyof typeof zh;

export default i18n;
