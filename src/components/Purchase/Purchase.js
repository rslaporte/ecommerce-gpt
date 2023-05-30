import React from 'react';
import './Purchase.css';
import confirmationIcon from '../../assets/img/purchase.jpg';

const Purchase = () => {
  return (
    <div className="purchase-container">
      <img src={confirmationIcon} alt="Confirmation Icon" className="confirmation-icon" />
      <h2 className="thank-you-message">Thank you for your purchase!</h2>
    </div>
  );
};

export default Purchase;