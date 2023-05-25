import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        <div className="product-card">
          <img src="image-url-1" alt="Product 1" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Price: $10</p>
          <Link to="/produto/produto1">View Details</Link>
        </div>
        <div className="product-card">
          <img src="image-url-2" alt="Product 2" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>Price: $20</p>
          <Link to="/produto/produto2">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;