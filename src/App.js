import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import LoginPage from './page/LoginPage';
import Layout from "./layout/Layout"
import ProductDetail from './components/productDetail';
import CartPage from './page/CartPage';
import CategoriesPage from './page/CategoriesPage';
import Register from './components/register/register';
import ProfileUser from './page/profilePage';
import AmazingProductsPage from './page/AmazingProductPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/product/:name/:id' element={<ProductDetail />} />
        <Route path="/user/:token" element={<ProfileUser />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/amazingproducts" element={<AmazingProductsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path='/' element={<Home />} />
        <Route path="/user/login" element={<LoginPage />} />
        <Route path="/user/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
