import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Layout from './layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import ContextCart from './context/Cart/CartProvider';
import axios from "axios"

axios.defaults.baseURL = "http://localhost:5000"
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
