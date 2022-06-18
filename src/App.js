import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './page/Home';
import LoginPage from './page/LoginPage';
import Layout from "./layout/Layout"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
