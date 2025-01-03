'use client'; // Ensure this is a client-side component

import React from 'react';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

const CheckoutPage = () => {
  const { cart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((total: number, item: { price: number; quantity: number }) => 
    total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-700">
        Checkout
      </h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty. Please add items to your cart.</p>
      ) : (
        <div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Order Summary</h3>
            <ul className="space-y-4">
              {cart.map((item: { id: string; name: string; price: number; quantity: number }) => (
                <li key={item.id} className="flex justify-between items-center border-b py-4">
                  <div className="flex items-center">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="ml-4 text-sm text-gray-500">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-600">Quantity: {item.quantity}</span>
                    <span className="font-bold text-gray-800">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mt-4">
              <span className="text-xl font-semibold">Total: </span>
              <span className="text-xl font-bold text-green-600">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <Link href="/cart">
              <button className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700">
                Back to Cart
              </button>
            </Link>
            <button
              onClick={() => alert('Checkout process will be implemented later.')}
              className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
