import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';
import PageNotFound from './PageNotFound/PageNotFound';
import { createContext, useEffect, useState } from 'react';

export const ProductsContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Header />
      <ProductsContext.Provider value={{ products, cart, setCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
