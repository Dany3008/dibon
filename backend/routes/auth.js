const express = require('express');
const router = express.Router();
const authController = require('../backend/controllers/authController');

// Ruta para el registro de usuarios
router.post('/registro', authController.registro);

// Ruta para el inicio de sesión
router.post('/login', authController.login);

module.exports = router;