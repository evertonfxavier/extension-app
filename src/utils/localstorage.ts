import { PACKTRACKING_ENUM } from "../constants/localstorage";

export const setLocalStorage = (data: any) => {
  return localStorage.setItem(PACKTRACKING_ENUM.KEY, JSON.stringify(data));
};

export const getLocalStorage = (data: any) => {
  const getStorage = localStorage.getItem(data);
  const formattedGetStorage = getStorage ? JSON.parse(getStorage) : null;

  return formattedGetStorage;
};
