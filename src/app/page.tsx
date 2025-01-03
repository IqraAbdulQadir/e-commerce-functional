"use client"; // This ensures that this component is treated as a client-side component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useCart } from '@/context/CartContext'; // Import the useCart hook
import { client } from '@/sanity/lib/client'; // Make sure to import your sanity client

interface Product {
  slug: {
    current: string;
  };
  name: string;
  price: number;
  description: string;
  image: SanityImageSource;
}

const HomePage = () => {
  const { addToCart } = useCart(); // Access the addToCart function from the context
  const [cartMessage, setCartMessage] = useState<string>(''); // State for cart feedback
  const [products, setProducts] = useState<Product[]>([]); // State for products

  // Fetch all products on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `
          *[_type == "product"] {
            slug,
            name,
            price,
            description,
            image
          }
        `;
        const data = await client.fetch(query);
        setProducts(data); // Store the fetched products in state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array to fetch only once on mount

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.slug.current,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
    setCartMessage(`Added ${product.name} to your cart!`); // Set feedback message

    // Clear feedback message after 2 seconds
    setTimeout(() => {
      setCartMessage('');
    }, 2000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner */}
      <div className="relative w-full h-[60vh] md:h-[60vh] bg-black">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/vid1.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center animate-fade-in">
            Sustainable Luxury Redefined
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 flex-grow">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-green-700">
          Sustainable Luxury Products
        </h2>

        {/* Cart Feedback Message */}
        {cartMessage && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-2 px-6 rounded-lg shadow-lg text-center">
            {cartMessage}
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product: Product) => (
            <div
              key={product.slug.current}
              className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in"
            >
              <img
                src={urlFor(product.image).url() || '/placeholder-image.png'}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">
                Price: <span className="font-bold">${product.price ? product.price.toFixed(2) : 'N/A'}</span>
              </p>

              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {product.description}
              </p>

              <div className="flex justify-between items-center">
                <Link href={`/Products/${product.slug.current}`}>
                  <button
                    className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-sem ibold hover:bg-green-700 transition-transform transform hover:scale-105 duration-300"
                    aria-label={`Read more about ${product.name}`}
                  >
                    Read More
                  </button>
                </Link>
                <button
                  onClick={() => handleAddToCart(product)} // Add product to cart
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600 border-black py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300"
                  aria-label={`Add ${product.name} to cart`}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

    
    </div>
  );
};

export default HomePage;