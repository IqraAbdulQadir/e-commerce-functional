'use client';

import { getProductsBySlug } from '@/sanity/lib/sanityCode';
import { urlFor } from '@/sanity/lib/image';
import ProductDetail from './ProductDetail'; // Import the client component

export const dynamic = 'force-dynamic'; // Ensures dynamic fetching

// Define the proper type for params
interface ProductDetailPageProps {
  params: { slug: string };
}

const ProductDetailPage = async ({ params }: ProductDetailPageProps) => {
  const product = await getProductsBySlug(params.slug);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <ProductDetail
      product={{
        id: product.slug.current, // Add the id property
        name: product.name,
        price: product.price,
        description: product.description,
        image: urlFor(product.image)?.url() || '/placeholder-image.png',
        category: product.category,
        inStock: product.inStock,
      }}
    />
  );
};

export default ProductDetailPage;
