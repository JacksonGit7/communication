const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Base de datos simulada
let usuarios = [
    { id: 1, nombre: "Admin Communication", email: "admin@communication.com", rol: "Administrador" },
    { id: 2, nombre: "Jackson Vergel", email: "aprendiz@sena.edu.co", rol: "Aprendiz ADSO" }
];

let mensajes = [
    { id: 1, autor: "Jackson Vergel", contenido: "¡Bienvenido al sistema de comunicación del proyecto!", fecha: "2026-10-11" }
];

// 1. Ruta principal
app.get('/', (req, res) => {
    res.json({ 
        estado: "Activo",
        mensaje: "API del proyecto Communication funcionando correctamente (EV3)",
        version: "1.0.0"
    });
});

// 2. Servicios de Usuarios
app.get('/api/usuarios', (req, res) => {
    res.json({ total: usuarios.length, data: usuarios });
});

app.post('/api/usuarios', (req, res) => {
    const { nombre, email, rol } = req.body;
    if (!nombre || !email) {
        return res.status(400).json({ error: "El nombre y el correo son obligatorios" });
    }
    const nuevoUsuario = { id: usuarios.length + 1, nombre, email, rol: rol || "Usuario Estándar" };
    usuarios.push(nuevoUsuario);
    res.status(201).json({ mensaje: "Usuario creado exitosamente", data: nuevoUsuario });
});

// 3. Servicios de Mensajes
app.get('/api/mensajes', (req, res) => {
    res.json({ total: mensajes.length, data: mensajes });
});

app.post('/api/mensajes', (req, res) => {
    const { autor, contenido } = req.body;
    if (!autor || !contenido) {
        return res.status(400).json({ error: "El autor y el contenido son obligatorios" });
    }
    const nuevoMensaje = { id: mensajes.length + 1, autor, contenido, fecha: new Date().toISOString().split('T')[0] };
    mensajes.push(nuevoMensaje);
    res.status(201).json({ mensaje: "Mensaje publicado exitosamente", data: nuevoMensaje });
});

// 4. Autenticación (Login)
app.post('/api/usuarios/login', (req, res) => {
    const { email, password } = req.body;
    if (email === "aprendiz@sena.edu.co" && password === "123") {
        res.json({ 
            mensaje: "Login exitoso", 
            token: "communication-token-sena",
            usuario: { email, rol: "Aprendiz ADSO" }
        });
    } else {
        res.status(401).json({ error: "Credenciales inválidas" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});