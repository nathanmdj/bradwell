import { NextRequest, NextResponse } from "next/server";

const products = [
  {
    name: 'beverages',
    imgLink: '/beverages.jpg',
    imgLink2: '/beverages2.png',
    items: ['Instant coffee powder', 'Instant black coffee', 'Non-dairy creamer', 'Cold soluble creamer', 'Whipped cream powder', 'Sweeteners', 'Anti-caking']
  },
  {
    name: 'meat-processing',
    imgLink2: '/meat2.png',
    items: ['Textured vegetable protein', 'Modified tapioca starch', 'Potato starch', 'Isolate soy protein', 'phosphates', 'Carrageean', 'Vital wheat gluteen', 'Bamboo fiber', 'Sodium erythorbate']
  }
]

type Params = {
  category: string
}
 
export async function GET(request: Request, context: { params: Params }) {
  const category = context.params.category
  
  const product = products.find((product) => product.name === category)

  if (!product) {
    return NextResponse.json({message: 'Product not found'}, {status: 404})
  }
  
  return NextResponse.json(product)
}
 
// Define params type according to your route parameters (see table below)