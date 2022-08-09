export const checkLogin = () => {
  return localStorage.getItem('userStatus') === 'login';
}
