import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add, updateQuantity } from '../slices/cartSlice'; 

const Card = ({ id, name, info, image, price, userId }) => {
  const [readMore, setReadMore] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();
  const description = readMore ? info : `${info.substring(0, 50)}...`;

  const readMoreHandler = () => {
    setReadMore(!readMore);
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      dispatch(updateQuantity({ userId, id, quantity: newQuantity }));
      return newQuantity;
    });
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => {
      if (prevQuantity > 1) {
        const newQuantity = prevQuantity - 1;
        dispatch(updateQuantity({ userId, id, quantity: newQuantity }));
        return newQuantity;
      } else {
        setIsAdded(false);
        return 1;
      }
    });
  };

  const addToCartHandler = () => {
    console.log('Adding item to cart', { userId, item: { id, name, price, quantity, image } });
    dispatch(add({ userId, item: { id, name, price, quantity, image} }));
    setIsAdded(true);
  };

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105 duration-300'>
      {/* Image */}
      <img
        src={image}
        alt={name}
        className='w-full scale-90 h-64 object-cover object-center rounded-t-lg'
      />
      
      <div className='p-4'>
        <div className='flex justify-between items-center'>
          <h4 className='text-lg font-semibold'>{name}</h4>
          <h4 className='text-lg font-semibold text-green-600'>₹ {price}</h4>
        </div>
        <p className='text-sm text-gray-600 mt-2'>{description}</p>

        {/* Read More Button */}
        <span
          className='text-blue-600 cursor-pointer mt-2 inline-block hover:text-blue-800 transition-colors duration-200'
          onClick={readMoreHandler}
        >
          {readMore ? 'Show Less' : 'Read More'}
        </span>

        {/* Add to Cart Section */}
        <div className='flex items-center mt-4'>
          {!isAdded ? (
            <button
              className='bg-blue-500 text-black border border-blue-600 py-1 px-3 rounded hover:bg-blue-600 transition-colors duration-200'
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          ) : (
            <>
              <button
                className='bg-gray-200 text-gray-800 border border-gray-400 py-1 px-2 rounded ml-2 hover:bg-gray-300 transition-colors duration-200'
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className='ml-2'>{quantity}</span>
              <button
                className='bg-gray-200 text-gray-800 border border-gray-400 py-1 px-2 rounded ml-2 hover:bg-gray-300 transition-colors duration-200'
                onClick={incrementQuantity}
              >
                +
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
