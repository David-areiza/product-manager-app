
import React, { useEffect, useState } from 'react';
import ProductService from '../services/productService';
import './product-list.css'; 

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await ProductService.getAllProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const totalProducts = products.reduce((total, product) => total + product.quantity, 0);

  return (
    <div className="product-list-container">
      <h1 className="title">Product List</h1>
      <p className="total-products">Total Products: {totalProducts}</p>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price.toFixed(2)}</span>
              <span className="product-quantity">Quantity: {product.quantity}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
