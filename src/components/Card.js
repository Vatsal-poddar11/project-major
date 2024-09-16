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
    dispatch(add({ userId, item: { id, name, price, quantity, image } }));
    setIsAdded(true);
  };

  return (
    <div className='bg-[#ffffff] shadow-lg rounded-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl duration-300'>
      <img
        src={image}
        alt={name}
        className='w-full h-64 object-cover scale-90 object-center rounded-t-lg'
      />
      
      <div className='p-6'>
        <div className='flex justify-between items-center'>
          <h4 className='text-xl font-bold text-[#2b2d42]'>{name}</h4>
          <h4 className='text-lg font-semibold text-[#8d99ae]'>₹ {price}</h4>
        </div>
        
        <p className='text-sm text-[#4d5460] mt-2 leading-relaxed'>
          {description}
        </p>
        
        <span
          className='text-[#007bff] cursor-pointer mt-2 inline-block font-medium hover:text-[#0056b3] transition-colors duration-200'
          onClick={readMoreHandler}
        >
          {readMore ? 'Show Less' : 'Read More'}
        </span>

        <div className='flex items-center mt-4'>
          {!isAdded ? (
            <button
              className='bg-[#2b2d42] text-white font-semibold py-2 px-4 rounded-full hover:bg-[#1e2531] transition-all duration-200 shadow-md'
              onClick={addToCartHandler}
            >
              Add to Cart
            </button>
          ) : (
            <div className='flex items-center'>
              <button
                className='bg-[#e0e0e0] text-[#333333] border border-[#dcdcdc] py-1 px-3 rounded-full hover:bg-[#d0d0d0] transition-all duration-200'
                onClick={decrementQuantity}
              >
                -
              </button>
              <span className='mx-4 text-lg font-semibold text-[#2b2d42]'>{quantity}</span>
              <button
                className='bg-[#e0e0e0] text-[#333333] border border-[#dcdcdc] py-1 px-3 rounded-full hover:bg-[#d0d0d0] transition-all duration-200'
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
