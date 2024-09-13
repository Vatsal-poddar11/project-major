import React from 'react';

const CartItem = ({ item }) => {
    console.log(item);

    return (
        <div className="flex items-center w-[60%] mb-4 p-4 border-b-2 border-gray-200 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
                src={item.imageUrl} 
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md mr-4" 
            />
            <div className="flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
                <p className="text-sm text-gray-700 mt-1">Price: <span className="font-medium text-gray-900">${item.price}</span></p>
                <p className="text-sm text-gray-700">Quantity: <span className="font-medium text-gray-900">{item.quantity}</span></p>
            </div>
            <div className="text-right ml-6">
                <p className="text-base font-semibold text-green-700">Total: <span className="text-lg">${(item.price * item.quantity).toFixed(2)}</span></p>
            </div>
        </div>
    );
};

export default CartItem;
