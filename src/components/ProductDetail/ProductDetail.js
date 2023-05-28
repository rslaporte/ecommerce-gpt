import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css'

const ProductDetail = () => {
  const { id } = useParams();
  const products = [
    {
      id: 'produto1',
      name: 'Produto 1',
      price: 14.9,
      image: 'path/to/produto1.jpg',
    },
    {
      id: 'produto2',
      name: 'Produto 2',
      price: 24.9,
      image: 'path/to/produto2.jpg',
    },
  ];

  const [quantity, setQuantity] = useState(1); // State for quantity selection
  const [ecommerceProducts, setEcommerceProducts] = useState([]);
  
  const addToCart = async () => {
    console.log(ecommerceProducts)
    const isLocalStorage = !!localStorage.getItem('ecommerceProducts')

    if(!isLocalStorage) await setEcommerceProducts([])
    else await setEcommerceProducts(JSON.parse(localStorage.getItem('ecommerceProducts')))
    console.log(ecommerceProducts)
    const existingProduct = ecommerceProducts.find((product) => product.id === id);

    if (existingProduct) {
      const updatedProducts = ecommerceProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity + quantity, // Update quantity based on selected value
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
        quantity: quantity, // Set initial quantity based on selected value
      };

      setEcommerceProducts([...ecommerceProducts, newProduct]);
    }
  };

  useEffect(() => {
    localStorage.setItem('ecommerceProducts', JSON.stringify(ecommerceProducts));
  }, [ecommerceProducts]);

  const selectedProduct = products.find((product) => product.id === id);

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={selectedProduct.image} alt={selectedProduct.name} />
      </div>
      <div className="product-info">
        <h2>{selectedProduct.name}</h2>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        <p>Price: ${selectedProduct.price}</p>
        <div className="quantity-selection">
          <button onClick={decrementQuantity}>-</button>
            <span>{quantity}</span>
          <button onClick={incrementQuantity}>+</button>
        </div>
        <button className='addToCart' onClick={addToCart}>Adicionar ao Carrinho</button>
      </div>
    </div>
  );
};

export default ProductDetail;