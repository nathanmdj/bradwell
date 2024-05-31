import { NextRequest, NextResponse } from "next/server";

const products = [
  {
    name: 'beverages',
    imgLink: '/beverages.jpg',
    imgLink2: '',
    items: ['instant coffee powder', 'instant black coffee', 'non-dairy creamer', 'cold soluble creamer', 'whipped cream powder', 'sweeteners', 'anti-caking']
  }
]

type Params = {
  category: string
}
 
export async function GET(request: Request, context: { params: Params }) {
  const category = context.params.category
  
  const product = products.find((product) => product.name === category)

  
  return NextResponse.json(product)
}
 
// Define params type according to your route parameters (see table below)