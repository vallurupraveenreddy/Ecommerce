import ShopContextProvider from './context/ShopContext';
import React from 'react'
 import {Routes,Route} from 'react-router-dom' 
 import Navbar from "./components/Navbar";
  import Home from "./pages/Home"; 
  import Cart from "./pages/Cart"; 
  import Collection from "./pages/Collection"; 
  import Contact from "./pages/Contact"; 
  import Login from "./pages/Login"; 
  import Orders from "./pages/Orders"; 
  import PlaceOrder from "./pages/PlaceOrder";
   import Product from "./pages/Product"; 
   import About from "./pages/About"; 
   import Footer from "./components/Footer"
    import SearchBar from './components/SearchBar'; 

    import { ToastContainer, toast } from "react-toastify"; 
    import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ShopContextProvider>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer />
        <Navbar />
        <SearchBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </ShopContextProvider>
  );
}

export default App;
