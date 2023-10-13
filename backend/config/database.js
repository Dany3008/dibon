const { Pool } = require('pg');
const config = require('./database');

const pool = new Pool({
  user: config.databaseConfig.user,
  host: config.databaseConfig.host,
  database: config.databaseConfig.database,
  password: config.databaseConfig.password,
  port: config.databaseConfig.port,
});

module.exports = pool;
