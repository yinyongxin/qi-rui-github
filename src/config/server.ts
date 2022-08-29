export const isDev = process.env.NODE_ENV === 'development';
// const host = import.meta.env.VITE_MODE_HOST;
// const name = import.meta.env.VITE_MODE_NAME;
let baseURL = '';
let safe = '';

if (isDev) {
  // baseURL = '192.168.50.235:9000/api';
  baseURL = '192.168.50.35:6060';
  // safe = 's';
}
// else {
//   baseURL = host;
//   safe = 's';
// }

export const server = {
  baseURL,
  safe,
};
