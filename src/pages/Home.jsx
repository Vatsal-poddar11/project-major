import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="hero-section">
        <div className="logo"></div>

        <div className="hero-content">
          <h1 className="hero-title">We Care for You and Your Health</h1>
          <p className="hero-subtitle">Your one-stop medical shop for all your health needs.</p>
          <button className="order-btn">Order Now</button>
        </div>
      </div>

      <div className="feature-section">
  <h2 className="section-title">Why Shop with Us?</h2>
  <div className="features">
    <div className="feature-card">
      <img src="/delivery.png" alt="Fast Shipping" className="feature-icon" />
      <h3>Fast Shipping</h3>
      <p>Get your orders quickly with our express shipping.</p>
    </div>
    <div className="feature-card">
      <img src="/support.png" alt="24/7 Support" className="feature-icon" />
      <h3>24/7 Support</h3>
      <p>Our team is here to help you round the clock.</p>
    </div>
    <div className="feature-card">
      <img src="/quality.png" alt="Quality Products" className="feature-icon" />
      <h3>Quality Products</h3>
      <p>Only the best products for your health and wellness.</p>
    </div>
  </div>
</div>


      
      <footer className="footer">
        <p>&copy; 2024 Medical Shop. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
