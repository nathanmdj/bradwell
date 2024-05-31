import Image from "next/image";


const ProductPage = async({params}: {params: {category: string}}) => {
  const response = await fetch(`http://localhost:3000/api/products/${params.category}`)

  const data = await response.json()
  console.log(data);
  
  return (
    <div className="flex-1 flex items-center container justify-center ">
      <div className="grid grid-cols-2 px-12 gap-10 xl:gap-20">
        <div className="col-span-1">
          <Image src={data.imgLink2} width={400} height={200} alt={data.name}/>
        </div>
        <div className="description col-span-1">
          <h1 className="border-b-4 pb-3 text-3xl border-emerald-600">{data.name.toUpperCase()}</h1>
          <div className="items ms-8 mt-3">
            <ul className="list-disc marker:text-emerald-600">
              {data.items.map((item) => (
                <li className="py-1" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage