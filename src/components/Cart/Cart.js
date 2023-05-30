import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartUrl from '../../assets/img/cart.png'
import { EcommerceContext } from '../../EcommerceContext';
import './Cart.css';

const Cart = () => {
  const {isOpen, setIsOpen} = useContext(EcommerceContext);
  const {ecommerceProducts, clearCart} = useContext(EcommerceContext);

  const handleToggleCart = () => {  
    setIsOpen(!isOpen);
    console.log(ecommerceProducts)
  }; 

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
          {ecommerceProducts.length !== 0 ? (
            ecommerceProducts.map((product, index) => (
              <div className="cart-item" key={index}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <div className="cart-item-name">{product.name}</div>
                  <div className="cart-item-price">${product.price}</div>
                  <div className="cart-item-quantity">Quantity: {product.quantity}</div>
                </div>
                {index < ecommerceProducts.length - 1 && <div className="cart-item-separator"></div>}
              </div>
            ))
          ) : (
            <div>There's nothing here</div>
          )}
        </div>
        <div className="cart-item-details"> 
          {ecommerceProducts.length !== 0 ? 'Total: ' + ecommerceProducts.reduce((acum, product) => {return acum + (product.price * product.quantity)}, 0).toFixed(2) : ''} 
        </div>
        <button className="cart-clear" onClick={clearCart}>Limpar Carrinho</button>
        <Link to="/checkout" className="cart-checkout" onClick={() => setIsOpen(false)}>Finalizar Compra</Link>
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
