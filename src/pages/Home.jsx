import React from 'react';
import Slider from "react-slick";
import './Home.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImage from '../assets/banner1.png';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
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
    { id: 2, user: 'Soham Mehra', review: 'The products are top quality. I trust this pharmacy.', rating: 4 },
    { id: 3, user: 'Kartik Singh', review: 'Fast delivery and quality product', rating: 4 },
    { id: 4, user: 'Vatsal Poddar', review: 'Great service and quick delivery!', rating: 5 },
    { id: 5, user: 'Sakshi Suman', review: 'The products are top quality. I trust this pharmacy.', rating: 4 },
    { id: 6, user: 'Prakhar Dwivedi', review: 'Fast delivery and quality product', rating: 5 },
    { id: 7, user: 'Deepak Singh', review: 'Great service and quick delivery!', rating: 4 },
  ];

  return (
    <div className="bg-[#edf2f4] min-h-screen">
      {/* Header Section */}
      <header className="bg-[#2b2d42] shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1></h1>
          <nav className="flex space-x-8">
            <a href="#popular-items" className="text-[#edf2f4] hover:text-[#ef233c] text-lg">Popular Items</a>
            <a href="#bought-items" className="text-[#edf2f4] hover:text-[#ef233c] text-lg">Frequently Bought</a>
            <a href="#why-choose-us" className="text-[#edf2f4] hover:text-[#ef233c] text-lg">Why Choose Us</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#2b2d42] to-[#8d99ae] text-white py-24 text-center">
        <div className="container mx-auto z-10">
          <h2 className="text-5xl font-extrabold mb-4">Your One-Stop Online Pharmacy</h2>
          <p className="text-lg mb-8">Get your medicines delivered quickly and conveniently at the best prices.</p>
          <button className="bg-gradient-to-r from-[#ef233c] to-[#ed062c] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-medium">
            Buy Now
          </button>
        </div>
        <img
          src="https://www.shutterstock.com/image-photo/shopping-trolley-medicines-pill-blister-600nw-2063222330.jpg"
          alt="Medicines Delivery"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </section>

      {/* Popular Items Section */}
      <section id="popular-items" className="py-16 bg-[#edf2f4]">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#2b2d42]">Popular Items</h2>
          <Slider {...settings}>
            <div className="p-4">
              <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
                <img src={require('../assets/reliefgel.png')} alt="Pain Relief Gel" className="w-40 h-40 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-[#2b2d42]">Pain Relief Gel</h3>
                <p className="text-gray-600 mb-4">Effective muscle pain relief gel.</p>
                <button className="mb-3 bg-gradient-to-r from-[#ef233c] to-[#ed062c] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-semibold">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
                <img src={require('../assets/syrup.png')} alt="Cough Syrup" className="w-40 h-40 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-[#2b2d42]">Cough Syrup</h3>
                <p className="text-gray-600 mb-4">Relief for coughs and sore throats.</p>
                <button className="bg-gradient-to-r from-[#ef233c] to-[#ed062c] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-semibold">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
                <img src={require('../assets/vitamin.png')} alt="Multivitamins" className="w-40 h-40 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-[#2b2d42]">Multivitamins</h3>
                <p className="text-gray-600 mb-4">Essential vitamins for daily health.</p>
                <button className="bg-gradient-to-r from-[#ef233c] to-[#ed062c] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-semibold">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
                <img src={require('../assets/sanitizer.png')} alt="Healing Ointment" className="w-40 h-40 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-[#2b2d42]">Healing Ointment</h3>
                <p className="text-gray-600 mb-4">For minor cuts and wounds.</p>
                <button className="bg-gradient-to-r from-[#ef233c] to-[#ed062c] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-semibold">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
                <img src={require('../assets/sanitizer.png')} alt="First Aid Bandages" className="w-40 h-40 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-[#2b2d42]">Bandages</h3>
                <p className="text-gray-600 mb-4">Pack of assorted bandages.</p>
                <button className="bg-gradient-to-r from-[#ef233c] to-[#ed062c] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-semibold">
                  Buy Now
                </button>
              </div>
            </div>

            <div className="p-4">
              <div className="bg-white shadow-lg p-6 rounded-lg max-w-xs mx-auto" style={{ height: '350px' }}>
                <img src={require('../assets/sanitizer.png')} alt="Hand Sanitizer" className="w-40 h-40 mx-auto mb-4 object-contain" />
                <h3 className="text-xl font-semibold mb-2 text-[#2b2d42]">Hand Sanitizer</h3>
                <p className="text-gray-600 mb-4">Kills 99.9% of germs instantly.</p>
                <button className="bg-gradient-to-r from-[#ef233c] to-[#ed062c] text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-sm font-semibold">
                  Buy Now
                </button>
              </div>
            </div>
          </Slider>
        </div>
      </section>

{/* Frequently Bought Items */}
<section id="bought-items" className="bg-gradient-to-r from-[#F7FAFC] to-[#EDF2F7] py-16">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-extrabold mb-12 text-[#2D3748]">Frequently Bought Items</h2>
    <Slider {...settings}>
      
      <div className="p-6">
        <div className="bg-white shadow-lg p-12 rounded-xl flex flex-col items-center max-w-xs mx-auto transform hover:scale-110 transition-transform duration-300" style={{ height: '350px', width: '250px' }}>
          <img src={require('../assets/sanitizer.png')} alt="Hand Sanitizer" className="w-28 h-28 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-[#1A202C]">Hand Sanitizer</h3>
          <p className="text-[#718096] mb-4 text-sm">Kills 99.9% of germs.</p>
          <button className="bg-gradient-to-r from-[#4299E1] to-[#2B6CB0] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#2B6CB0] hover:to-[#2C5282] transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white shadow-lg p-12 rounded-xl flex flex-col items-center max-w-xs mx-auto transform hover:scale-110 transition-transform duration-300" style={{ height: '350px', width: '250px' }}>
          <img src={require('../assets/facemask.png')} alt="Face Mask" className="w-28 h-28 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-[#1A202C]">Face Mask</h3>
          <p className="text-[#718096] mb-4 text-sm">Breathable 3-layer protection.</p>
          <button className="bg-gradient-to-r from-[#48BB78] to-[#2F855A] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#2F855A] hover:to-[#276749] transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
      </div>

      <div className="p-6">
        <div className="bg-white shadow-lg p-12 rounded-xl flex flex-col items-center max-w-xs mx-auto transform hover:scale-110 transition-transform duration-300" style={{ height: '350px', width: '250px' }}>
          <img src={require('../assets/thermometer.png')} alt="Thermometer" className="w-28 h-28 object-contain mb-4" />
          <h3 className="text-xl font-bold mb-2 text-[#1A202C]">Thermometer</h3>
          <p className="text-[#718096] mb-4 text-sm">Accurate temperature readings.</p>
          <button className="bg-gradient-to-r from-[#ED64A6] to-[#D53F8C] text-white px-6 py-2 rounded-full shadow-lg hover:shadow-2xl hover:bg-gradient-to-r hover:from-[#D53F8C] hover:to-[#B83280] transition-all duration-300 text-sm font-medium">Buy Now</button>
        </div>
      </div>

    </Slider>
  </div>
</section>

{/*Customer Reviews*/}
<section id="customer-reviews" className="py-16 bg-gradient-to-r from-[#F9FAFB] via-[#E5E7EB] to-[#D1D5DB]">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-[#1F2937]">Customer Reviews</h2>
    <Slider {...reviewSettings}>
      {reviews.map((review) => (
        <div key={review.id} className="p-4">
          <div className="bg-[#FFFFFF] shadow-xl p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-[#0077B6] mb-2">{review.user}</h3>
            <p className="text-[#4B5563] mb-4">"{review.review}"</p>
            <div className="flex justify-center text-[#FBBF24]">
              {Array.from({ length: review.rating }, (_, i) => (
                <span key={i}>&#9733;</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</section>

{/* Why Choose Us */}
<section id="why-choose-us" className="py-16 bg-gradient-to-b from-[#F9FAFB] to-[#E5E7EB]">
  <div className="container mx-auto text-center">
    <h2 className="text-4xl font-bold mb-12 text-[#1F2937]">Why Choose Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-[#FFFFFF] shadow-lg hover:shadow-2xl p-6 rounded-lg transform hover:scale-105 transition duration-300">
        <div className="flex justify-center mb-4">
          <img src={require('../assets/fastdelivery.png')} alt="Fast Delivery" className="w-24 h-24 object-contain" />
        </div>
        <h3 className="text-2xl font-semibold text-[#0077B6] mb-2">Fast Delivery</h3>
        <p className="text-[#4B5563]">Quick delivery of medicines to your doorstep.</p>
      </div>

      <div className="bg-[#FFFFFF] shadow-lg hover:shadow-2xl p-6 rounded-lg transform hover:scale-105 transition duration-300">
        <div className="flex justify-center mb-4">
          <img src={require('../assets/support.png')} alt="24/7 Support" className="w-24 h-24 object-contain" />
        </div>
        <h3 className="text-2xl font-semibold text-[#0077B6] mb-2">24/7 Support</h3>
        <p className="text-[#4B5563]">Round-the-clock support for all your needs.</p>
      </div>

      <div className="bg-[#FFFFFF] shadow-lg hover:shadow-2xl p-6 rounded-lg transform hover:scale-105 transition duration-300">
        <div className="flex justify-center mb-4">
          <img src={require('../assets/qualityproduct.png')} alt="Quality Products" className="w-24 h-24 object-contain" />
        </div>
        <h3 className="text-2xl font-semibold text-[#0077B6] mb-2">Quality Products</h3>
        <p className="text-[#4B5563]">We offer only top-quality medicines.</p>
      </div>
    </div>
  </div>
</section>

      {/* Footer Section */}
<footer className="bg-[#1F2937] text-[#D1D5DB] py-12">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
      <a href="/about" className="text-lg font-semibold mb-4 text-[#F3F4F6]">About Us</a>
      <p className="mt-4 text-[#9CA3AF]">MedKart is a trusted online pharmacy delivering medicines quickly and safely to your doorstep.</p>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4 text-[#F3F4F6]">Quick Links</h3>
      <ul>
        <li><a href="#popular-items" className="hover:text-[#9CA3AF] transition-colors duration-300">Popular Items</a></li>
        <li><a href="#bought-items" className="hover:text-[#9CA3AF] transition-colors duration-300">Frequently Bought Items</a></li>
        <li><a href="#why-choose-us" className="hover:text-[#9CA3AF] transition-colors duration-300">Why Choose Us</a></li>
      </ul>
    </div>
    <div>
      <h3 className="text-lg font-semibold mb-4 text-[#F3F4F6]">Contact Us</h3>
      <p className="text-[#9CA3AF]">Email: <a href="mailto:storelinks1@gmail.com" className="hover:text-[#FFFFFF] transition-colors duration-300">storelinks1@gmail.com</a></p>
      <p className="text-[#9CA3AF]">Phone: <a href="tel:+1234567890" className="hover:text-[#FFFFFF] transition-colors duration-300">+1-234-567-890</a></p>
    </div>
  </div>
  <div className="text-center mt-8 text-[#9CA3AF]">
    &copy; 2024 MedKart. All rights reserved.
  </div>
</footer>
    </div>
  );
};

export default Home;
