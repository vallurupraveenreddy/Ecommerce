import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

function Cart() {
  const { products, cartItems } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];

    for (const productId in cartItems) {
      for (const size in cartItems[productId]) {
        if (cartItems[productId][size] > 0) {
          tempData.push({
            _id: productId,
            size: size,
            quantity: cartItems[productId][size],
          });
        }
      }
    }

    setCartData(tempData);
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      <div>
        {cartData.map((item, index) => {
          // Find product by _id
          const productData = products.find(product => product._id === item._id);
          if (!productData) return null; // skip if product not found

          // Safely get the first image
          const imageSrc = productData.image && productData.image.length > 0 ? productData.image[0] : '';

          return (
            <div 
              key={index} 
              className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'
            >
              <div className='flex items-start gap-6'>
                <img 
                  className='w-16 sm:w-20' 
                  src={imageSrc} 
                  alt={productData.name || 'Product'} 
                />
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                  <p className='text-xs sm:text-sm text-gray-500'>
                    Size: {item.size} | Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
