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
        <div>
            {
                Object.keys(cart).length > 0 ? 
                (
                <div className="flex ml-5 mr-5">
                    <div className="flex flex-col w-1/2 mt-20 items-center justify-center">
                        { 
                            Object.values(cart).map((item) => (
                                <CartItem key={item.id} item={item} />
                            ))
                        }
                    </div>
                    <div className="mt-20 w-1/2 flex flex-col items-center select-none">
                        <div className="flex flex-col items-center mb-10">
                            <div className="font-bold text-8xl text-center mb-4 text-[#8bc34a]">Your Cart</div>
                            <div className="font-bold text-6xl text-center text-[#8bc34a] mb-3">Summary</div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-[#333333] text-3xl font-semibold mb-6">
                                Total Items - <span>{Object.keys(cart).length}</span>
                            </p>
                            <p className="text-[#333333] text-3xl font-semibold mb-10">
                                Total Amount - <span>${totalAmount.toFixed(2)}</span>
                            </p>
                            <button className="bg-[#8bc34a] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#508810e1] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Checkout Now</button>
                        </div>
                    </div>
                </div>
                ) 
                : 
                (
                <div className="h-screen flex flex-col justify-center items-center">
                    <h1 className="text-[#333333] text-3xl font-bold mb-6">Cart Empty</h1>
                    <NavLink to="/catalog">
                        <button className="bg-[#508810e1] transition ease-in duration-200 hover:bg-[#8bc34a] flex items-center gap-x-2 uppercase font-semibold text-white pl-5 pr-5 pt-3 pb-3 rounded-md ">
                            <FaShoppingCart />
                            <p>Shop Now</p>
                        </button>
                    </NavLink>
                </div>
                )
            }
        </div>
    );
};

export default Cart;