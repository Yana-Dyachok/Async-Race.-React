//const LOCAL_URL = 'http://127.0.0.1:3000';
const PROD_URL = 'https://async-race-api.up.railway.app';
const LOCAL_URL = 'https://async-race-api.up.railway.app';
export const LINK =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1'
    ? LOCAL_URL
    : PROD_URL;

export const GARAGE__LINK = `${LINK}/garage`;
export const WINNERS__LINK = `${LINK}/winners`;
export const ENGINE__LINK = `${LINK}/engine`;
