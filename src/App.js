import React from 'react';
import './output.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CombinedComponent from './CombinedComponent/CombinedComponent';
import ProductList from './routes/ProductList/productList';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes> {/* Wrap Routes around your Route components */}
          <Route path="/" element={<CombinedComponent />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
