import { createContext } from 'react';
import { products } from '../assets/frontend_assets/assets';
import { useState } from 'react';
import { toast } from 'react-toastify';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 15;
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});

  
  
  const addToCart = (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size');
      console.log('Adding to cart:', itemId, size, cartItems);

      return;
    }

    setCartItems((prevCartItems) => {
      const cartData = { ...prevCartItems }; // copy top-level cart
      if (cartData[itemId]) {
        cartData[itemId] = { ...cartData[itemId] }; // copy nested size object
        cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
      } else {
        cartData[itemId] = { [size]: 1 };
      }
      return cartData;
    });
  };

  const getCartCount = () => {
    let totalCount = 0;
    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        totalCount += cartItems[productId][size];
      }
    }
    return totalCount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
