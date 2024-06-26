const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/products', productRoutes); // Monta las rutas de productRoutes bajo /api/products

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
