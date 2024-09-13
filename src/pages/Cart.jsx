import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Cart = () => {
    const userId = useSelector((state) => state.auth.userId);
    const token = useSelector((state) => state.auth.token); // Fetch the token from Redux store
    const usersCarts = useSelector((state) => state.cart.usersCarts);
    const cart = usersCarts[userId]?.items || {}; 
    const [totalAmount, setTotalAmount] = useState(0);
    const [deliveryCost, setDeliveryCost] = useState(0);
    const [totalDistance, setTotalDistance] = useState(0); // New state for total distance
    const [locationFetched, setLocationFetched] = useState(false);
    const storeLocation = { latitude:20.353858611736086, longitude: 85.82268773909541 }; // Bhubaneswar coordinates

    // Calculate total cart amount
    useEffect(() => {
        setTotalAmount(
            Object.values(cart).reduce((acc, curr) => acc + (parseFloat(curr.price) * (curr.quantity || 1)), 0)
        );
    }, [cart]);

    // Load the Razorpay SDK dynamically
    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    // Handle checkout process and Razorpay payment
    const handlePayment = async () => {
        const isScriptLoaded = await loadRazorpayScript();
        if (!isScriptLoaded) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        try {
            // Call backend to create a Razorpay order and get order details
            const response = await fetch('http://localhost:4000/api/v1/payment/capture-payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,  // Use token here
                },
                body: JSON.stringify({
                    totalAmount: totalAmount, 
                }),
            });

            const data = await response.json();
            console.log('Data from backend : ', data);
            if (!response.ok) {
                console.error('Failed to create order:', data.message);
                return;
            }

            const options = {
                key: process.env.REACT_APP_RAZORPAY_KEY_ID,
                amount: data.amount,
                currency: data.currency, 
                name: "Your Store", 
                description: "Payment for your order",
                order_id: data.orderId,
                handler: function (response) {
                    const paymentData = {
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature,
                    };

                    fetch('http://localhost:4000/api/v1/payment/verify-signature', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`, // Use token here
                        },
                        body: JSON.stringify(paymentData),
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            if (data.success) {
                                alert('Payment successful!');
                                console.log('Payment verified:', data);
                            } else {
                                alert('Payment verification failed.');
                            }
                        });
                },
                prefill: {
                    name: "Customer Name", 
                    email: "customer@example.com", 
                    contact: "9999999999", 
                },
                notes: {
                    address: "Customer's Address",
                },
                theme: {
                    color: "#4A90E2", 
                },
            };

            const razorpayInstance = new window.Razorpay(options);
            razorpayInstance.open(); 

        } catch (error) {
            console.error('Error during checkout:', error);
        }
    };

    // Get user location and calculate delivery cost based on distance
    const handleLocationPermission = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const distance = calculateDistance(storeLocation.latitude, storeLocation.longitude, latitude, longitude);
                    const deliveryCharge = distance * 0.5 * 50; // Example: ₹ 0.5 per km
                    setDeliveryCost(deliveryCharge);
                    setTotalDistance(distance); // Set the total distance
                    setLocationFetched(true);
                },
                (error) => {
                    console.error("Error fetching location:", error);
                    alert("Unable to retrieve your location.");
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    };

    // Function to calculate distance between two coordinates (Haversine formula)
    const calculateDistance = (lat1, lon1, lat2, lon2) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * (Math.PI / 180);
        const dLon = (lon2 - lon1) * (Math.PI / 180);
        const a = 
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

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
                                        <img
                                            src={item.image || "https://via.placeholder.com/100"}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-md"
                                        />
                                        <div className="flex flex-col">
                                            <span className="font-semibold">{item.name}</span>
                                            <span className="text-xs text-[#888888]">{item.description}</span>
                                        </div>
                                    </div>

                                    {/* Price and Quantity */}
                                    <div className="text-right">
                                        <p className="font-semibold">₹ {item.price}</p>
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
                            <p className="text-[#333333] text-xl font-medium mb-3">
                                Total Amount: <span>₹ {totalAmount.toFixed(2)}</span>
                            </p>
                            {locationFetched && (
                                <>
                                    <p className="text-[#333333] text-xl font-medium mb-3">
                                        Distance: <span>{totalDistance.toFixed(2)} km</span>
                                    </p>
                                    <p className="text-[#333333] text-xl font-medium mb-3">
                                        Delivery Cost: <span>₹ {deliveryCost.toFixed(2)}</span>
                                    </p>
                                    <p className="text-[#333333] text-xl font-medium mb-3">
                                        Total with Delivery: <span>₹ {(totalAmount + deliveryCost).toFixed(2)}</span>
                                    </p>
                                </>
                            )}
                        </div>

                        {!locationFetched ? (
                            <button
                                onClick={handleLocationPermission}
                                className="bg-[#F5A623] text-white py-3 px-8 rounded-full shadow-md hover:bg-[#F7C948] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Calculate Delivery Cost
                            </button>
                        ) : (
                            <button
                                onClick={handlePayment}
                                className="bg-[#4A90E2] text-white py-3 px-8 rounded-full shadow-md hover:bg-[#357ABD] transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            >
                                Proceed to Pay
                            </button>
                        )}
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
