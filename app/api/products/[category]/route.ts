import { NextRequest, NextResponse } from "next/server";

const products = [
  {
    name: 'beverages',
    imgLink2: '/beverages2.png',
    items: ['Instant coffee powder', 'Instant black coffee', 'Non-dairy creamer', 'Cold soluble creamer', 'Whipped cream powder', 'Sweeteners', 'Anti-caking']
  },
  {
    name: 'meat-processing',
    imgLink2: '/meat2.png',
    items: ['Textured vegetable protein', 'Modified tapioca starch', 'Potato starch', 'Isolate soy protein', 'phosphates', 'Carrageean', 'Vital wheat gluteen', 'Bamboo fiber', 'Sodium erythorbate']
  },
  {
    name: 'sauces',
    imgLink2: '/sauces2.webp',
    items: ['Modified tapioca starch', 'Flavours', 'Carrageenan', 'Xanthan gum', 'CMC-FG', 'Sodium benzoate']
  },
  {
    name: 'desserts',
    imgLink2: '/desserts2.webp',
    items: ['Carrageenan', 'Xanthan gum', 'Non-dairy creamer', 'Cold soluble creamer', 'Whipped cream powder', 'Sweeteners', 'Anti-caking', 'Modified tapioca starch', 'Flavours']
  },
  {
    name: 'flavours',
    imgLink2: '/flavours2.png',
    items: ['Vegetables', 'Fruits', 'Meat', 'Seafoods', 'Dairy', 'Spices','Mint flavour and oils by Australia Mints and Oils']
  },
  {
    name: 'nutraceuticals',
    imgLink2: '/nutraceuticals2.png',
    items: ['For weight loss', 'Mental alert', 'For younger looking skin', 'Stress relief', 'Overall wellness', 'Aprosidiac']
  },
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