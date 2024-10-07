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
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      dispatch(updateQuantity({ userId, id, quantity: newQuantity }));
      return newQuantity;
    });
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
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
    <div className="bg-[#2b2d42] text-[#ffffff] p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
      <div className="rounded-lg overflow-hidden shadow-md">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-2xl font-bold text-[#8d99ae]">{name}</h3>
        <p className="mt-2 text-[#f3f4f6]">{description}</p>

        <span
          className="text-[#00b4d8] cursor-pointer mt-2 block font-medium hover:text-[#0096c7] transition-colors duration-200"
          onClick={readMoreHandler}
        >
          {readMore ? 'Show Less' : 'Read More'}
        </span>

        <div className="flex items-center justify-between mt-6">
          <span className="text-lg font-bold text-[#8d99ae]">₹ {price}</span>
          <div>
            {!isAdded ? (
              <button
                className="bg-[#00b4d8] text-white font-bold py-2 px-6 rounded-full hover:bg-[#0077b6] transition-all duration-200"
                onClick={addToCartHandler}
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  className="bg-[#adb5bd] text-[#2b2d42] font-bold py-1 px-3 rounded-full hover:bg-[#868e96] transition-all duration-200"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <span className="text-xl font-bold text-[#ffffff]">{quantity}</span>
                <button
                  className="bg-[#adb5bd] text-[#2b2d42] font-bold py-1 px-3 rounded-full hover:bg-[#868e96] transition-all duration-200"
                  onClick={incrementQuantity}
                >
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
