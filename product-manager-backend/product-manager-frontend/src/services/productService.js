// product-manager-frontend/src/services/productService.js

import axios from 'axios';
import API_URL from '../config';

const ProductService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },

  // Otras funciones para crear, actualizar y eliminar productos se pueden agregar aquí
};

export default ProductService;
