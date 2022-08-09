import { appLocalStorage } from './appLocalStorage';

export function changeTheme(theme: RiRuiTypes.Theme) {
  document.body.setAttribute('theme', theme);
  appLocalStorage.setValue<RiRuiTypes.Theme>('theme', 'dark');
}
