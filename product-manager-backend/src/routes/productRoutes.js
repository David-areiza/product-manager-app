const express = require('express');
const router = express.Router();

// Ejemplo de funciones en productController.js

const getProducts = (req, res) => {
    // Lógica para obtener productos
    res.send('Lista de productos');
};

const getProductById = (req, res) => {
    // Lógica para obtener un producto por ID
    const productId = req.params.id;
    res.send(`Obtener producto con ID ${productId}`);
};

const createProduct = (req, res) => {
    // Lógica para crear un nuevo producto
    res.send('Crear nuevo producto');
};

const updateProduct = (req, res) => {
    // Lógica para actualizar un producto existente
    const productId = req.params.id;
    res.send(`Actualizar producto con ID ${productId}`);
};

router.get('/', getProducts);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);

module.exports = router;



// productRoutes.js

const productController = require('../controllers/productController'); // Asegúrate de que esta ruta es correcta

// Rutas para gestionar productos
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
