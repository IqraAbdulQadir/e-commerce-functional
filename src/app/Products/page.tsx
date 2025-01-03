// import { getAllProducts } from '@/sanity/lib/sanityCode';
// import Link from 'next/link';
// import { urlFor } from '@/sanity/lib/image'; // Adjust the import path accordingly
// import { SanityImageSource } from '@sanity/image-url/lib/types/types';

// interface Product {
//   slug: {
//     current: string;
//   };
//   name: string;
//   price: number;
//   description: string;
//   image: SanityImageSource; // Ensure this matches the type used in urlFor
// }

// const ProductPage = async () => {
//   const products: Product[] = await getAllProducts(); // Specify the type here
//   console.log(products);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#2f4f4f]">
//         Featured Products
//       </h2>
//       <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//       {products.map((product: Product) => (
//   <div key={product.slug.current} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
//     {/* Display the product image */}
//     <img 
//       src={urlFor(product.image).url() || '/placeholder-image.png'} 
//       alt={product.name} 
//       className="w-full h-48 object-cover rounded-t-lg mb-4" 
//     />
    
//     <h3 className="text-xl font-bold text-[#333333] mb-4">{product.name}</h3>
//     <p className="text-[#2f4f4f] text-sm mb-4">
//       <span>${product.price ? product.price.toFixed(2) : 'N/A'}</span> 
//       {/* Display 'N/A' if price is undefined */}
//     </p>
    
//     <Link href={`/products/${product.slug.current}`}>
//       <button 
//         className="inline-block bg-electric-green text-midnight-blue py-1 px-4 mt-2 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300"
//         aria-label={`Read more about ${product.name}`}
//       >
//         Read More
//       </button>
//     </Link>
//   </div>
// ))}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

// This will be the server component that fetches the products
import { getAllProducts } from '@/sanity/lib/sanityCode';
import { ProductPage } from './ProductPage'; // Import the client-side component

const ProductsPage = async () => {
  const products = await getAllProducts(); // Fetch products on the server side

  return (
    <div>
      <ProductPage products={products} />
    </div>
  );
};

export default ProductsPage;
