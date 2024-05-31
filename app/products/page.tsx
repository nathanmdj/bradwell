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
const page = () => {
  return (
    <section className="flex items-center flex-1 justify-center">
      <div className="products">
        <h1 className="text-center text-3xl font-bold mb-10">Our Products</h1>
        <div className="flex justify-center gap-10 flex-wrap">
          {categories.map((category) => (
            <ProductCategory key={category.name} name={category.name} path={category.path} imgLink={category.imgLink}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default page