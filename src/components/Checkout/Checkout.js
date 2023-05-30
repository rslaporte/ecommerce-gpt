import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { EcommerceContext } from '../../EcommerceContext';
import './Checkout.css';

const Checkout = () => {
  const { ecommerceProducts, setEcommerceProducts } = useContext(EcommerceContext);

  const calculateTotal = () => {
    let total = 0;
    for (const product of ecommerceProducts) {
      total += product.quantity * product.price;
    }
    return total.toFixed(2);
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="checkout-products">
        {ecommerceProducts.length !== 0 ? (
          ecommerceProducts.map((product) => (
            <div className="checkout-product" key={product.id}>
              <img src={product.image} alt={product.name} className="checkout-product-image" />
              <div className="checkout-product-details">
                <div className="checkout-product-name">{product.name}</div>
                <div className="checkout-product-price">R${product.price}</div>
                <div className="checkout-product-quantity">Quantity: {product.quantity}</div>
                
              </div>
            </div>
          ))
        ) : (
          <div>There are no products in the cart</div>
        )}
      </div>
      <div className="checkout-total">Total: R${calculateTotal()}</div>
      <Link to='/purchase' className="checkout-button" onClick={() => setEcommerceProducts([])}>
        Comprar
      </Link>
    </div>
  );
};

export default Checkout;