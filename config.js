import getConfig from 'next/config'
const {publicRuntimeConfig} = getConfig()

export const API = 'http://localhost:5000/api';
export const APP_NAME = publicRuntimeConfig.APP_NAME;
export const DOMAIN = "chalamannewyork.com";

export const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
// publicRuntimeConfig.PRODUCTION 
// ? publicRuntimeConfig.API_PRODUCTION 
// : publicRuntimeConfig.API_DEVELOPMENT;
// export const APP_NAME = publicRuntimeConfig.APP_NAME;
// mongodb://82.180.161.124:27017/chalamannewyork