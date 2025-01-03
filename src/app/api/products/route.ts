import { NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ibbp74kz',  // Replace with your Sanity project ID
  dataset: 'production',  // Replace with your dataset name
  useCdn: true,           // Use the Sanity CDN for faster responses
});

interface Params {
  slug: string;
}

export async function GET(request: Request, { params }: { params: Params }) {
  try {
    const { slug } = params;
    const product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug });
    
    if (!product) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error('Error fetching product:', error); // Log the error
    return NextResponse.json({ error: 'Failed to fetch product' }, { status: 500 });
  }
}