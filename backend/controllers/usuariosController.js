const User = require('../models/User');

// Obtener la lista de usuarios
exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await User.find();
    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

// Implementa otros métodos para actualizar, eliminar, etc.
