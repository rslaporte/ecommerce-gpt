import React, { createContext, useState } from 'react';
import product1 from './assets/img/image-1.jpg'
import product2 from './assets/img/image-2.png'

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
   const products = [
    {
      id: 'produto1',
      name: 'Produto 1',
      price: 14.9,
      image: product1
    },
    {
      id: 'produto2',
      name: 'Produto 2',
      price: 24.9,
      image: product2
    },
  ];

  const [ecommerceProducts, setEcommerceProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (id, quantity) => {
    const existingProduct = ecommerceProducts.find((product) => product.id === id);

    if (existingProduct) {
      const updatedProducts = ecommerceProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + quantity,
          };
        }
        return product;
      });

      setEcommerceProducts(updatedProducts);

    } else {
      const newProduct = {
        id: id,
        name: products.find((product) => product.id === id).name,
        price: products.find((product) => product.id === id).price,
        image: products.find((product) => product.id === id).image,
        quantity: quantity
      };

      setEcommerceProducts([...ecommerceProducts, newProduct]);
    }
  };

  const clearCart = () => {
    setEcommerceProducts([]);
  };

  return (
    <EcommerceContext.Provider
      value={{
        products,
        isOpen, 
        setIsOpen,
        setEcommerceProducts,
        ecommerceProducts,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
};