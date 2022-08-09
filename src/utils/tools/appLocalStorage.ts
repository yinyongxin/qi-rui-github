/**
 *  自定义LocalStorage
 */
export const appLocalStorage = {
  /**
   * 向localStorage设置值
   * @param key 存放数据的键 字符串类型
   * @param value 需要存放的值：任何类型
   * @returns 无任何返回值
   */
  setValue: <V = any>(key: string, value: V) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw error;
    }
  },
  /**
   * 从localStorage取值
   * @param key 数据的键 字符串类型
   * @returns null 或者存着的值
   */
  getValue: <T = unknown>(key: string): T | null => {
    try {
      const value = localStorage.getItem(key);
      if (!value) {
        return null;
      }
      return JSON.parse(value);
    } catch (error) {
      throw error;
    }
  },
};
