const express = require('express');
const cors = require('cors'); // Habilita la comunicación desde el navegador

const app = express();

// Middleware
app.use(cors()); // Importante: Permite las peticiones desde el index.html
app.use(express.json());

// Base de datos simulada en memoria
let usuarios = [
  { 
    id: 1, 
    nombre: "Carlos Mendoza", 
    email: "carlos.mendoza@email.com", 
    password: "123", 
    rol: "Residente - Apto 402" 
  }
];

let mensajes = [
  { id: 1, autor: "Jackson Vergel (Admin)", contenido: "Bienvenidos al sistema de comunicación oficial." }
];

// Rutas / Endpoints
app.get('/', (req, res) => {
  res.json({ mensaje: "API Communication Activa y Funcionando" });
});

// Obtener Usuarios
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// Crear Usuario
app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = { id: usuarios.length + 1, ...req.body };
  usuarios.push(nuevoUsuario);
  res.status(201).json({ mensaje: "Usuario creado con éxito", usuario: nuevoUsuario });
});

// Login de Usuario
app.post('/api/usuarios/login', (req, res) => {
  const { email, password } = req.body;
  const usuario = usuarios.find(u => u.email === email && u.password === password);

  if (usuario) {
    res.json({ mensaje: "Autenticación exitosa", token: "token-simulado-12345", usuario });
  } else {
    res.status(401).json({ mensaje: "Credenciales incorrectas" });
  }
});

// Obtener Mensajes
app.get('/api/mensajes', (req, res) => {
  res.json(mensajes);
});

// Publicar Mensaje
app.post('/api/mensajes', (req, res) => {
  const nuevoMensaje = { id: mensajes.length + 1, ...req.body };
  mensajes.push(nuevoMensaje);
  res.status(201).json({ mensaje: "Anuncio publicado", anuncio: nuevoMensaje });
});

// Puerto de ejecución
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});