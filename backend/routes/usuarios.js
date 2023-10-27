const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { validationResult } = require('express-validator');
const User = require('../models/User');
const config = require('../config');

// Registro de usuario
exports.registro = async (req, res) => {
  try {
    // Validación de datos (usar express-validator u otra biblioteca similar)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Extraer datos del cuerpo de la solicitud
    const { nombre, apellido, tipoDocumento, numeroDocumento, contacto1, contacto2, telefono, correoEmpresarial, logoEmpresa, autorizacionTratamiento, tipoUsuario } = req.body;

    // Comprobar si el usuario ya existe en la base de datos
    let user = await User.findOne({ numeroDocumento });

    if (user) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    // Crear un nuevo usuario
    user = new User({
      nombre,
      apellido,
      tipoDocumento,
      numeroDocumento,
      contacto1,
      contacto2,
      telefono,
      correoEmpresarial,
      logoEmpresa,
      autorizacionTratamiento,
      tipoUsuario
    });

    // Hashear la contraseña antes de guardarla en la base de datos (si es necesario)
    // user.password = await bcrypt.hash(password, 10);

    // Guardar el usuario en la base de datos
    await user.save();

    // Crear y firmar el token de acceso
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, config.secret, { expiresIn: 3600 }, (error, token) => {
      if (error) throw error;
      res.json({ token });
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error en el servidor');
  }
};

// Inicio de sesión
exports.login = async (req, res) => {
  // Implementa la lógica de inicio de sesión aquí
};
