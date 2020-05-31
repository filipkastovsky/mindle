if (process.env.NODE_ENV === 'development') require('dotenv').config();

module.exports = {
    env: {
        API_URL: process.env.API_URL,
        LOGIN_URL: process.env.LOGIN_URL,
        REFRESH_URL: process.env.REFRESH_URL,
        USER_API_URL: process.env.USER_API_URL,
        AUTH_ADMIN_LOGIN_URL: process.env.AUTH_ADMIN_LOGIN_URL,
        AUTH_PUBLIC_KEY: process.env.AUTH_PUBLIC_KEY,
        AUTH_PRIVATE_KEY: process.env.AUTH_PRIVATE_KEY,
    },
};
