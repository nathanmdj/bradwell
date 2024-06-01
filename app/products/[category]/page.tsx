import NotFound from "@/app/not-found";
import Image from "next/image";


const ProductPage = async({params}: {params: {category: string}}) => {
  const response = await fetch(`http://localhost:3000/api/products/${params.category}`)

  const data = await response.json()
  
  if(!response.ok){ 
    return <NotFound/>
  }
  
  return (
    <div className="flex-1 flex container justify-center my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 pe-10 lg:px-12 gap-10 xl:gap-20 h-full">
        <div className="col-span-1 flex items-center">
          <Image src={data.imgLink2} width={600} height={200} alt={data.name}/>
        </div>
        <div className="description col-span-1">
          <h1 className="border-b-4 pb-3 text-2xl lg:text-3xl font-bold border-emerald-600">{data?.name?.toUpperCase()}</h1>
          <div className="items ms-8 mt-3">
            <ul className="list-disc marker:text-emerald-600">
              {data?.items?.map((item:string) => (
                <li className="py-1 text-xl" key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage