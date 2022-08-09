import { menuLocale } from './menuLocale';
import { globalLocale } from './globalLocale';
import { componentsLocale } from './compomentsLocale';
import { pagesLocale } from './pagesLocale';

export default {
  ...globalLocale,
  ...menuLocale,
  ...componentsLocale,
  ...pagesLocale,
};
