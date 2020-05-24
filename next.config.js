if (process.env.NODE_ENV === 'development') require('dotenv').config();

module.exports = {
    env: {
        API_URL: process.env.API_URL,
    },
};
