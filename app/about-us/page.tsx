import Image from 'next/image'
import React from 'react'

const industries = [
  {
    name: 'Food and Beverage Manufacturer',
    imgLink: '/industry1.webp',
  },
  {
    name: 'Hotel',
    imgLink: '/industry2.webp',
  },
  {
    name: ' Restaurants',
    imgLink: '/industry3.webp',
  },
  {
    name: 'Laundry and Cleaning Services / Households Manufacturer',
    imgLink: '/industry4.webp',
  },
  {
    name: 'Industrial',
    imgLink: '/industry5.webp',
  },
]
const AboutPage = () => {
  return (
    <section className='container mb-10'>
      <h1 className='text-3xl font-bold text-center'>About Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-10">
        <div className="col-span-1">
          <Image src={'/about.webp'} width={500} height={500} alt={'bradwell'} />
        </div>
        <div className="col-span-1 flex items-center">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, recusandae magnam aspernatur molestias voluptas deleniti vel velit dolore beatae. Nisi eligendi quis porro ratione voluptas quam excepturi illum soluta? Doloribus odio dignissimos pariatur ipsum ut porro eveniet modi nihil, ad, distinctio quod? Commodi consequatur eligendi iste iusto corporis delectus assumenda nostrum maiores velit. Reprehenderit ipsa qui praesentium accusantium debitis. Sapiente veniam itaque deserunt cupiditate rerum, quos voluptas praesentium culpa dicta modi harum dolorem minima, rem maxime necessitatibus sit molestias magni perferendis? Similique corrupti vero ad modi id quidem blanditiis ut doloremque explicabo architecto eligendi necessitatibus consequuntur eum optio, facilis deleniti?</p>
        </div>
      </div>

      <h2 className='text-3xl font-bold text-center my-10'>Industries We Serve</h2>
      <div className="flex justify-center gap-10 gap-y-3 flex-wrap">
        {industries.map((industry, i) => (
          <div key={i} className='w-[200px]' >
            <div className='h-[200px] flex items-end flex-wrap'>
              <Image src={industry.imgLink} width={200} height={200} alt={industry.name} />              
            </div>
            <h3 className='text-center text-wrap text-lg font-bold'>{industry.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AboutPage