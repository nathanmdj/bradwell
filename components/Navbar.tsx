import Image from 'next/image'
import React from 'react'
import NavLinks from './NavLinks'
import { Button } from './ui/button'

const navlinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Products",
    path: "/products",
  },
  {
    name: "About Us",
    path: "/about",
  },
  
]
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center ">
      <div className="logo p-2 ms-5">
        <Image src="/logo.png" width={80} height={60} alt='logo'/>
      </div>
      <ul className='flex gap-5 '>
        {navlinks.map((link) => (
          <NavLinks key={link.name} name={link.name} path={link.path}/>
        ))}
      </ul>
      <Button className='me-5 bg-orange-500 hover:bg-orange-600'>Contact Us</Button>
    </nav>
  )
}

export default Navbar