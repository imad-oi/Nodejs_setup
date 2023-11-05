// config/database.js
const databaseConfig = {
    development: {
      url: 'mongodb://localhost/mydb_dev',
    },
    production: {
      url: 'mongodb://prod-server/mydb',
    },
  };
  
  module.exports = databaseConfig;
  