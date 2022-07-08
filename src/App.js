import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import LoginPage from './page/LoginPage';
import Layout from "./layout/Layout"
import ProductDetail from './components/productDetail';
import CartPage from './page/CartPage';

function App() {
  return (
    <Routes>
      <Route path='/product/:name/:id' element={<ProductDetail />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path='/' element={<Home />} />
    </Routes>
  );
}

export default App;
