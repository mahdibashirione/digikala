import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import ContextCart from './context/Cart/CartProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextCart>
        <Layout>
          <App />
        </Layout>
      </ContextCart>
    </BrowserRouter>
  </React.StrictMode>
);
