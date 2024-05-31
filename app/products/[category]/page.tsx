

const ProductPage = async({params}: {params: {category: string}}) => {
  const response = await fetch(`http://localhost:3000/api/products/${params.category}`)

  const data = await response.json()
  console.log(data);
  
  return (
    <div>{params.category}</div>
  )
}

export default ProductPage