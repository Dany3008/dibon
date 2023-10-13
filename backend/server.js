const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const config = require('./config/config');
const pool = require('./config/database'); // Importa la configuración de la base de datos

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', authRoutes);

app.listen(config.port, () => {
  console.log(`Servidor en ejecución en el puerto ${config.port}`);
});
