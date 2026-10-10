const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Datos de prueba
let usuarios = [
  { id: 1, nombre: "Aprendiz SENA", email: "aprendiz@sena.edu.co" }
];

// Ruta GET: Estado de la API
app.get('/', (req, res) => {
  res.json({ mensaje: "API del proyecto Communication funcionando correctamente" });
});

// Ruta GET: Obtener usuarios
app.get('/api/usuarios', (req, res) => {
  res.status(200).json({
    exito: true,
    data: usuarios
  });
});

// Ruta POST: Autenticación / Login
app.post('/api/usuarios/login', (req, res) => {
  const { email, password } = req.body;
  
  if (!email || !password) {
    return res.status(400).json({
      exito: false,
      mensaje: "Faltan datos de inicio de sesión"
    });
  }

  res.status(200).json({
    exito: true,
    mensaje: "Inicio de sesión exitoso en Communication",
    token: "token-sena-12345"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor de Communication corriendo en http://localhost:${PORT}`);
});