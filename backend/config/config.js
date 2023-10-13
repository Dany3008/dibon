module.exports = {
    port: 3000, // Puerto del servidor Express
    secret: '1211', // Clave secreta para JWT
    databaseConfig: {
      user: 'postgres',
      host: 'localhost',
      database: 'dibon',
      password: '1211',
      port: 5433, // Puerto de PostgreSQL
    },
    // Otras variables de configuración si es necesario
  };
  