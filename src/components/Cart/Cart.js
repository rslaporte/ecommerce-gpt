import React, { useEffect, useState } from 'react';
import './Cart.css';
import CartUrl from '../../assets/img/cart.png'

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [ecommerce, setEcommerce] = useState([]);

  const handleToggleCart = () => {
    const storedProducts = JSON.parse(localStorage.getItem('ecommerceProducts')) || [];
    setEcommerce(storedProducts)  
    setIsOpen(!isOpen);
  };

  const handleClearCart = () => {
    localStorage.removeItem('ecommerceProducts');
    setEcommerce([])
  };

  //useEffect(() => {}, [ecommerce])

  return (
    <div className="cart-container">
      <div className={`cart-overlay ${isOpen ? 'visible' : ''}`} onClick={handleToggleCart}></div>
      <div className={`cart-content ${isOpen ? 'visible' : ''}`}>
        <div className="cart-header">
          <h2>Carrinho</h2>
          <button className="cart-close" onClick={handleToggleCart}>
            X
          </button>
        </div>
        <div className="cart-items">
          {ecommerce.length !== 0 ? (
            ecommerce.map((product, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={`path/to/product/image-${index}.jpg`}
                  alt={product.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <div className="cart-item-name">{product.name}</div>
                  <div className="cart-item-price">${product.price}</div>
                  <div className="cart-item-quantity">Quantity: {product.quantity}</div>
                </div>
                {index < ecommerce.length - 1 && <div className="cart-item-separator"></div>}
              </div>
            ))
          ) : (
            <div>There's nothing here</div>
          )}
        </div>
        <div className="cart-item-details"> 
          {ecommerce.length != 0 ? 'Total: ' + ecommerce.reduce((acum, product) => {return acum + (product.price * product.quantity)}, 0).toFixed(2) : ''} 
        </div>
        <button className="cart-clear" onClick={handleClearCart}>Limpar Carrinho</button>
        <button className="cart-checkout">Finalizar Compra</button>
      </div>
      <div className="cart-icon" onClick={handleToggleCart}>
        {!isOpen ? (
          <img
          src={CartUrl}
          alt="Cart"
          className="cart-icon-image"
        />
        ) : null}
      </div>
    </div>
  );
};

export default Cart;
