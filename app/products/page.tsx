
import OtherProducts from "@/components/OtherProducts"
import ProductCategory from "@/components/ProductCategory"

const categories = [
  {
    name: 'Beverages',
    path: '/products/beverages',
    imgLink: '/beverages.jpg'
  },
  {
    name: 'Meat Processing',
    path: '/products/meat-processing',
    imgLink: '/meat.jpeg'
  },
   {
    name: 'Sauces',
    path: '/products/sauces',
    imgLink: '/sauces.jpeg'
  },
   {
    name: 'Frozen Dairy & Desserts',
    path: '/products/desserts',
    imgLink: '/frozen.png'
  },
   {
    name: 'Flavours & Oils',
    path: '/products/flavours',
    imgLink: '/oils.webp'
  },
   {
    name: 'Nutraceuticals & Extracts',
    path: '/products/nutraceuticals',
    imgLink: '/extracts.jpg'
  },
  
]

const otherProducts = [
  {
    name: 'Household and Cleaning',
    imgLink: '/cleaning.jpg',
  },
  {
    name: 'Personal Care and Cosmetics',
    imgLink: '/cosmetics.webp',
  },
  {
    name: 'Aromatic and Oils',
    imgLink: '/aromatic.webp',
  },
  {
    name: 'Industrial Chemicals and Raw Materials',
    imgLink: '/industrial.webp',
  },
  
]
const page = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="products">
        <h1 className="text-center text-3xl font-bold mb-8">Our Products</h1>
        <div className="flex justify-center gap-10 xl:gap-x-24 xl:mx-72 flex-wrap">
          {categories.map((category, i) => (
            <ProductCategory key={i} name={category.name} path={category.path} imgLink={category.imgLink}/>             
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-center text-3xl font-bold mb-8">Other Products</h1>
        <div className="flex justify-center gap-10 xl:gap-x-24 xl:mx-72 flex-wrap">
          {otherProducts.map((category, i) => (
            <OtherProducts key={i} name={category.name} imgLink={category.imgLink}/>             
          ))}
        </div>
      </div>
    </section>
  )
}

export default page