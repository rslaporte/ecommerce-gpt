import React from 'react';
import './App.css';
import ProductList from './components/ProductList/ProductList';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductDetail from './components/ProductDetail/ProductDetail';

const App = () => {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/produtos" element={<ProductList />} />
          <Route path="/produto/:id" element={<ProductDetail />} />
          <Route path="/" />
        </Routes>
      </div>

  );
};

export default App;