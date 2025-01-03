import { client } from './client';

export const getAllProducts = async () => {
  const query = '*[_type == "product"] | order(publishedAt desc)'; // Query to get all blog posts
  const products = await client.fetch(query);
  return products;
};

export const getProductsBySlug = async (slug: string) => {
    const query = `*[_type == "product" && slug.current == $slug][0]`;
  const products = await client.fetch(query, { slug });
  return products;
};
