import express from 'express';

import morgan from 'morgan';

import cors from 'cors';

// // DB connection establishment
// import './database/database.js';

// import routerProducts from './routes/productsRoutes.js';
// import routerAuth from './routes/authRoutes.js';
// import routerUsers from './routes/userRoutes.js';

// 1 - Inicializo la aplicación
const app = express();

// 2 - Establecer el puerto (o en entorno de desarrollo)
const PORT = process.env.PORT || 5000;

// 3 - Middlewares (antes y después del controlador)
app.use(morgan('dev')); // después
app.use(cors()); // Cross-Origin-Resource-Sharing
app.use(express.json()); // se prepara para recibir response, body en formato JSON (sino devuelve "undefined")

// 4 - Rutas
// app.use('/api/v1/products', routerProducts);
// app.use('/api/v1/auth', routerAuth);
// app.use('/api/v1/users', routerUsers);

// 5 - Iniciar el loop del servidor
app.listen(PORT, () => {
  console.log(`El servidor se está ejecutando en puerto ${PORT}`);
});