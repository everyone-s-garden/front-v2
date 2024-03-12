export const setItem = (key: string, value: string) => {
  return sessionStorage.setItem(key, JSON.stringify(value));
};

export const removeItem = (key: string) => {
  return sessionStorage.removeItem(key);
};

export const getItem = (key: string) => {
  return JSON.parse(sessionStorage.getItem(key) as string);
};
