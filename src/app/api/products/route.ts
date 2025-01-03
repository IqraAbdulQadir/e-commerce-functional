import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'ibbp74kz',  // Replace with your Sanity project ID
  dataset: 'production',         // Replace with your dataset name
  useCdn: true,                  // Use the Sanity CDN for faster responses
})

export async function GET() {
  try {
    const products = await client.fetch('*[_type == "product"]'); // Fetch all products
    return NextResponse.json(products);
  } catch (error) {
    console.error('Error fetching products:', error); // Log the error
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
