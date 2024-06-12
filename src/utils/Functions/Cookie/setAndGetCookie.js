import Cookies from "js-cookie";

export const getCookieState = (cookieName, initialState) => {
  const cookieValue = Cookies.get(cookieName);
  return cookieValue ? Number(cookieValue) : initialState;
};

export const setCookieState = (cookieName, value) => {
  Cookies.set(cookieName, value);
};