import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import LoginPage from './page/LoginPage';
import Layout from "./layout/Layout"
import ProductDetail from './components/productDetail';

function App() {
  return (
    <Routes>
      <Route path='/product' element={<ProductDetail />} />
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
