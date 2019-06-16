let apiConfig = require(`./config/${process.env.REACT_APP_ENV}`);
export const getConfig = () => (apiConfig.default)