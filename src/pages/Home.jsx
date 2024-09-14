import React from 'react';
import Slider from "react-slick";
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImage from '../assets/banner1.png';

const Home = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };
  

  const reviewSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };


  const reviews = [
    { id: 1, user: 'Vikas Gupta', review: 'Great service and quick delivery!', rating: 5 },
    { id: 2, user: 'Sohum mehra', review: 'The products are top quality. I trust this pharmacy.', rating: 4 },
    { id: 2, user: 'Kartik singh', review: 'Fast delivery and quality product', rating: 4 },

  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-3xl font-extrabold text-blue-600">MedKart</h1>
          <nav className="flex space-x-8">
            <a href="#popular-items" className="text-gray-700 hover:text-blue-600 text-lg">Popular Items</a>
            <a href="#bought-items" className="text-gray-700 hover:text-blue-600 text-lg">Frequently Bought</a>
            <a href="#why-choose-us" className="text-gray-700 hover:text-blue-600 text-lg">Why Choose Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 text-center">
        <div className="container mx-auto z-10">
          <h2 className="text-5xl font-extrabold mb-4">Your One-Stop Online Pharmacy</h2>
          <p className="text-lg mb-8">Get your medicines delivered quickly and conveniently at the best prices.</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
        <img
          src="https://via.placeholder.com/600x400"
          alt="Medicines Delivery"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
      </section>

{/* Popular Items Section */}
<section id="popular-items" className="py-16 bg-gray-50">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-gray-800">Popular Items</h2>
    <Slider {...settings}>
      
      <div className="p-4">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
          <img src={require('../assets/reliefgel.png')} alt="Pain Relief Gel" className="w-40 h-40 mx-auto mb-4 object-contain" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Pain Relief Gel</h3>
          <p className="text-gray-600 mb-4">Effective muscle pain relief gel.</p>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-black px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 text-sm font-semibold">
            Buy Now
          </button>
        </div>
      </div>

      
      <div className="p-4">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
          <img src={require('../assets/syrup.png')} alt="Cough Syrup" className="w-40 h-40 mx-auto mb-4 object-contain" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Cough Syrup</h3>
          <p className="text-gray-600 mb-4">Relief for coughs and sore throats.</p>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-black px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 text-sm font-semibold">
            Buy Now
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
          <img src={require('../assets/vitamin.png')} alt="Multivitamins" className="w-40 h-40 mx-auto mb-4 object-contain" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Multivitamins</h3>
          <p className="text-gray-600 mb-4">Essential vitamins for daily health.</p>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-black px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 text-sm font-semibold">
            Buy Now
          </button>
        </div>
      </div>

     
      <div className="p-4">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
          <img src={require('../assets/vitamin.png')} alt="Multivitamins" className="w-40 h-40 mx-auto mb-4 object-contain" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Multivitamins</h3>
          <p className="text-gray-600 mb-4">Essential vitamins for daily health.</p>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-black px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 text-sm font-semibold">
            Buy Now
          </button>
        </div>
      </div>

    
      <div className="p-4">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
          <img src={require('../assets/vitamin.png')} alt="Multivitamins" className="w-40 h-40 mx-auto mb-4 object-contain" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Multivitamins</h3>
          <p className="text-gray-600 mb-4">Essential vitamins for daily health.</p>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-black px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 text-sm font-semibold">
            Buy Now
          </button>
        </div>
      </div>

     
      <div className="p-4">
        <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
          <img src={require('../assets/vitamin.png')} alt="Multivitamins" className="w-40 h-40 mx-auto mb-4 object-contain" />
          <h3 className="text-xl font-semibold mb-2 text-gray-900">Multivitamins</h3>
          <p className="text-gray-600 mb-4">Essential vitamins for daily health.</p>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-black px-8 py-3 rounded-full shadow-lg hover:shadow-xl hover:from-blue-500 hover:to-blue-700 transition-all duration-300 text-sm font-semibold">
            Buy Now
          </button>
        </div>
      </div>
    </Slider>
  </div>
</section>

{/*Frequently Bought Items*/}

      <section id="bought-items" className="bg-gradient-to-r from-gray-50 to-gray-200 py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-gray-800">Frequently Bought Items</h2>
    <Slider {...settings}>
      
      <div className="p-6">
        <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300" style={{ height: '350px', width: '250px' }}>
          <img src={require('../assets/sanitizer.png')} alt="Hand Sanitizer" className="w-28 h-28 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Hand Sanitizer</h3>
          <p className="text-gray-500 mb-4 text-sm">Kills 99.9% of germs.</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
      </div>

      
      <div className="p-6">
        <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300" style={{ height: '350px', width: '250px' }}>
          <img src={require('../assets/facemask.png')} alt="Face Mask" className="w-28 h-28 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Face Mask</h3>
          <p className="text-gray-500 mb-4 text-sm">Breathable 3-layer protection.</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300" style={{ height: '350px', width: '250px' }}>
          <img src={require('../assets/thermometer.png')} alt="Thermometer" className="w-28 h-28 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Thermometer</h3>
          <p className="text-gray-500 mb-4 text-sm">Accurate digital temperature readings.</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
      </div>

      
      <div className="p-6">
        <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300" style={{ height: '350px', width: '250px' }}>
          <img src={require('../assets/thermometer.png')} alt="Thermometer" className="w-28 h-28 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Thermometer</h3>
          <p className="text-gray-500 mb-4 text-sm">Accurate digital temperature readings.</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
      </div>

   
       <div className="p-6">
        <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300" style={{ height: '350px', width: '250px' }}>
          <img src={require('../assets/thermometer.png')} alt="Thermometer" className="w-28 h-28 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Thermometer</h3>
          <p className="text-gray-500 mb-4 text-sm">Accurate digital temperature readings.</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
      </div>

       
       <div className="p-6">
        <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300" style={{ height: '350px', width: '250px' }}>
          <img src={require('../assets/thermometer.png')} alt="Thermometer" className="w-28 h-28 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Thermometer</h3>
          <p className="text-gray-500 mb-4 text-sm">Accurate digital temperature readings.</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
      </div>

      
       <div className="p-6">
        <div className="bg-white shadow-md p-6 rounded-xl flex flex-col items-center max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300" style={{ height: '350px', width: '250px' }}>
          <img src={require('../assets/thermometer.png')} alt="Thermometer" className="w-28 h-28 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-gray-900">Thermometer</h3>
          <p className="text-gray-500 mb-4 text-sm">Accurate digital temperature readings.</p>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-black px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
      </div>

    </Slider>
  </div>
</section>


     {/*Customer Reviews*/}
       
       <section id="customer-reviews" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-800">Customer Reviews</h2>
          
          <Slider {...reviewSettings}>
            {reviews.map((review) => (
              <div key={review.id} className="p-4">
                <div className="bg-white shadow-lg p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{review.user}</h3>
                  <p className="text-gray-600 mb-4">"{review.review}"</p>
                  <div className="text-yellow-400">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <span key={i}>&#9733;</span> // Star icon
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section id="why-choose-us" className="py-16 bg-gray-50">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-gray-800">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <img src={require('../assets/fastdelivery.png')} alt="Fast Delivery" className="w-24 h-24 object-cover" />
        </div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Fast Delivery</h3>
        <p className="text-gray-600">Quick delivery of medicines to your doorstep.</p>
      </div>
      <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <img src={require('../assets/support.png')} alt="24/7 Support" className="w-24 h-24 object-cover" />
        </div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">24/7 Support</h3>
        <p className="text-gray-600">Round-the-clock support for all your needs.</p>
      </div>
      <div className="bg-white shadow-md hover:shadow-lg p-6 rounded-lg transition-shadow duration-300">
        <div className="flex justify-center mb-4">
          <img src={require('../assets/qualityproduct.png')} alt="Quality Products" className="w-24 h-24 object-cover" />
        </div>
        <h3 className="text-2xl font-semibold text-blue-600 mb-2">Quality Products</h3>
        <p className="text-gray-600">We offer only top-quality medicines.</p>
      </div>
    </div>
  </div>
</section>


      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p>MedKart is a trusted online pharmacy delivering medicines quickly and safely at your doorstep.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#popular-items" className="hover:text-white">Popular Items</a></li>
              <li><a href="#bought-items" className="hover:text-white">Frequently Bought Items</a></li>
              <li><a href="#why-choose-us" className="hover:text-white">Why Choose Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Email: support@medkart.com</p>
            <p>Phone: +1-234-567-890</p>
          </div>
        </div>
        <div className="text-center mt-8">
          &copy; 2024 MedKart. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
