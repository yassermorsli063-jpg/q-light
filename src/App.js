import React, { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Categories from "./components/Categories";
import Pruducts from "./components/Pruducts";
import Login from "./components/Login";
import LusterLED from "./components/LusterLED";
import Aplique from "./components/Aplique";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import CheckoutSuccess from "./components/CheckoutSuccess";
import Store from "./Store";
import LusterCrystal from "./components/LusterCrystal";
import Banner from "./components/banner";
import Search from "./components/Search";
import Contact from "./components/Conect";            



import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from "react-router-dom";

function AppContent() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("q-light-cart") || "[]");
    } catch {
      return [];
    }
  });
  const location = useLocation();
  const showBanner = location.pathname !== "/";

  useEffect(() => {
    localStorage.setItem("q-light-cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="App">
      {showBanner && <Banner />}

      <Routes>

         
          <Route
            path="/"
            element={<Main />}
          />

          
          <Route
            path="/categories"
            element={<Categories />}
          />

        
          <Route
            path="/products"
            element={
              <Pruducts
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route path="/search" element={<Search />} />


        
          <Route
             path="/luster-led"
            element={
              <LusterLED
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route
            path="/aplique"
            element={
              <Aplique
                cart={cart}
                setCart={setCart}
              />
            }
          />

          
          <Route
            path="/luster-crystal"
            element={
              <LusterCrystal
                cart={cart}
                setCart={setCart}
              />
            }
          />

          
          <Route
            path="/store/:id"
            element={<Store />}
          />

          
         

          <Route
            path="/login"
            element={<Login />}
          />

        
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                setCart={setCart}
              />
            }
          />

          <Route
            path="/checkout-success"
            element={<CheckoutSuccess />}
          />
           <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;