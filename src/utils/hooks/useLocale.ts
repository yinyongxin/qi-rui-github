import { useContext } from 'react';
import { GlobalContext } from '@/config/context';
import defaultLocale from '@/locale';
import { isString } from 'lodash';
import { LocaleType } from '@/locale';

/**
 * 国际化hooks
 * @returns [(key: stiring[], joinString: string) => stirng]
 */
export function useLocale(): (key: LocaleType | LocaleType[], joinString?: string) => string {
  const { lang } = useContext(GlobalContext);
  
  const locales = defaultLocale?.[lang]

  return (key: LocaleType | LocaleType[], joinString = '') => {
    if (isString(key)) {
      return locales[`${key}`];
    } else {
      return key?.map((item) => locales[`${item}`]).join(joinString);
    }
  };
}
