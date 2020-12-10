module.exports = {
    PORT,
    NODE_ENV,
    APP_SECRET,
    APP_REFRESH_SECRET
 } = process.env;

module.exports = IN_PROD = NODE_ENV === 'production';