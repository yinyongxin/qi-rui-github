import regulars from './regulars';

export default {
  isEmail: (value: string) => regulars.email.test(value),
  isPhoneNumber: (value: string) => regulars.phoneNumber.test(value),
  isUsername: (value: string) => regulars.username.test(value),
  isInteger: (value: string) => regulars.integer.test(value),
  isDecimal: (value: string) => regulars.decimal.test(value),
};
