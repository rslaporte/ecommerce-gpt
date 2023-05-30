import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';
import product1 from '../../assets/img/image-1.jpg'
import product2 from '../../assets/img/image-2.png'

const ProductList = () => {
  return (
    <div className="product-list">
      <div id={1} product_name="Produto 1" price="$19.99" product_category="categoria" product_brand="brand" className="card">
        <img className="card-image" src={product1} alt="Product 1" />
        <div className="card-description">
          <h3>Product 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="card-price">$19.99</div>
        <Link to="/produto/produto1" className="card-button">View Details</Link>
      </div>
      <div className="card">
        <img className="card-image" src={product2} alt="Product 2" />
        <div className="card-description">
          <h3>Product 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="card-price">$24.99</div>
        <Link to="/produto/produto2" className="card-button">View Details</Link>
      </div>
    </div>
  );
};

export default ProductList;
