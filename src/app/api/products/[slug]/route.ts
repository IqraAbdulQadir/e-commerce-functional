// In app/api/products/[slug]/route.ts
import { NextResponse } from 'next/server'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'your-project-id',  // Replace with your Sanity project ID
  dataset: 'production',
  useCdn: true,  // Enable CDN for faster responses
})

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  const { slug } = params  // Get the slug from the URL parameters
  
  // Fetch the product using the slug
  const product = await client.fetch(`*[_type == "product" && slug.current == $slug][0]`, { slug })

  // Return the product as JSON
  if (product) {
    return NextResponse.json(product)
  } else {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 })
  }
}
