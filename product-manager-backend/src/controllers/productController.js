// productController.js

const Product = require('../models/Product'); // Importar el modelo de Producto
const { validationResult } = require('express-validator'); // Importar validación de datos si es necesario
// productController.js

// Obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json(products);
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Obtener un producto por su ID
  const getProductById = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      res.status(200).json(product);
    } catch (error) {
      console.error('Error fetching product by ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Crear un nuevo producto
  const createProduct = async (req, res) => {
    const { name, price } = req.body;
    try {
      const newProduct = await Product.create({ name, price });
      res.status(201).json(newProduct);
    } catch (error) {
      console.error('Error creating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Actualizar un producto existente
  const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      await product.update({ name, price });
      res.status(200).json(product);
    } catch (error) {
      console.error('Error updating product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Eliminar un producto
  const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
      const product = await Product.findByPk(id);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      await product.destroy();
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting product:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
  // Exportar las funciones del controlador
  module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
  };
  