'use client'; // Mark this component as a client component

import { useState } from 'react';
import { useCart } from '../../../context/CartContext';

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
}

const ProductDetail = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column: Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-lg shadow-md w-full object-cover"
          />
        </div>

        {/* Right Column: Product Details */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 text-gray-800">{product.name}</h1>
            <p className="text-2xl font-semibold text-purple-700 mb-4">Rs {product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Quantity:</h3>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-l-lg"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="w-12 text-center border-t border-b border-gray-300"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-gray-200 text-gray-700 rounded-r-lg"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={() => alert('Go to Cart functionality!')}
              className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition"
            >
              Go to Cart
            </button>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-2">Product Details:</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Category: {product.category}</li>
              <li>{product.inStock ? 'In stock' : 'Out of stock'}</li>
              <li>Free shipping</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
