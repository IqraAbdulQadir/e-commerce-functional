'use client'; // This ensures that this component is treated as a client-side component

import React, { useState } from 'react';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { useCart } from '@/context/CartContext'; // Import the useCart hook

interface Product {
  slug: {
    current: string;
  };
  name: string;
  price: number;
  description: string;
  image: SanityImageSource;
}

interface ProductPageProps {
  products: Product[];
}

export const ProductPage: React.FC<ProductPageProps> = ({ products }) => {
  const { addToCart } = useCart(); // Access the addToCart function from the context
  const [cartMessage, setCartMessage] = useState<string>(''); // State for cart feedback

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
    <div className="container mx-auto px-4 py-8">
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
            className="bg-white border border-gray-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
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
                  className="bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-green-700 transition duration-300"
                  aria-label={`Read more about ${product.name}`}
                >
                  Read More
                </button>
              </Link>
              <button
                onClick={() => handleAddToCart(product)} // Add product to cart
                className="bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-300"
                aria-label={`Add ${product.name} to cart`}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
