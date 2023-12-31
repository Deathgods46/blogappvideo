export const setStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key: string): any => {
  return JSON.parse(localStorage.getItem(key) as string);
};
