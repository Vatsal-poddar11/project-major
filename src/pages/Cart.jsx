import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import CartItem from '../components/CartItem';

const Cart = () => {
    const userId = useSelector((state) => state.auth.userId);
    const usersCarts = useSelector((state) => state.cart.usersCarts);
    const cart = usersCarts[userId]?.items || {}; 
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(
            Object.values(cart).reduce((acc, curr) => acc + (parseFloat(curr.price) * (curr.quantity || 1)), 0)
        );
    }, [cart]);

    return (
        <div className="flex flex-col items-center bg-[#F7F7F7] min-h-screen py-10">
        {Object.keys(cart).length > 0 ? (
          <div className="flex flex-col items-center w-full px-4">
            <div className="flex flex-col items-center mb-12 w-full">
              <div className="font-bold text-5xl text-center text-[#4A90E2] mb-4">
                Your Cart
              </div>
              <div className="font-semibold text-3xl text-center text-[#F5A623]">
                Summary
              </div>
            </div>
      
            {/* Cart Items Section */}
            <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col w-full mb-6 space-y-4">
                {Object.values(cart).map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center w-full bg-[#F7F7F7] p-4 rounded-md shadow-sm text-[#333333] text-sm"
                  >
                    {/* Image and Item Details */}
                    <div className="flex items-center gap-3">
                      {/* Small Image of the Cart Item */}
                      <img
                        src={item.image|| "https://via.placeholder.com/100"} // Item's image source
                        alt={item.name}   // Alt text as the item's name
                        className="w-16 h-16 object-cover rounded-md" // Size and shape of the image
                      />
                      <div className="flex flex-col">
                        <span className="font-semibold">{item.name}</span>
                        <span className="text-xs text-[#888888]">{item.description}</span>
                      </div>
                    </div>
                    
                    {/* Price and Quantity */}
                    <div className="text-right">
                      <p className="font-semibold">${item.price}</p>
                      <p className="text-xs">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
      
              {/* Total and Checkout Section */}
              <div className="w-full flex flex-col items-center mb-6">
                <p className="text-[#333333] text-xl font-medium mb-3">
                  Total Items: <span>{Object.keys(cart).length}</span>
                </p>
                <p className="text-[#333333] text-xl font-medium mb-6">
                  Total Amount: <span>${totalAmount.toFixed(2)}</span>
                </p>
              </div>
      
              <button className="bg-[#4A90E2] text-white py-3 px-8 rounded-full shadow-md hover:bg-[#357ABD] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                Checkout Now
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-[#333333] text-3xl font-bold mb-6">Cart Empty</h1>
            <NavLink to="/catalog">
              <button className="bg-[#F5A623] transition ease-in duration-200 hover:bg-[#F7C948] flex items-center gap-x-2 uppercase font-semibold text-white px-5 py-3 rounded-full shadow-lg transform hover:scale-105">
                <FaShoppingCart />
                <p>Shop Now</p>
              </button>
            </NavLink>
          </div>
        )}
      </div>
      
      
      
    );
};

export default Cart;