import Image from 'next/image'
import NavLinks from './NavLinks'
import { Button } from './ui/button'
import Link from 'next/link'
import MobileMenu from './MobileMenu'

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
    path: "/about-us",
  },
]
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center ">
      <div className="logo p-2 ms-5">
        <Link href={'/'}>
          <Image src="/logo.png" width={80} height={60} alt='logo'/>
        </Link>
      </div>
      <ul className='lg:flex gap-5 hidden'>
        {navlinks.map((link) => (
          <li key={link.name} className='text-xl font-bold'>
            <NavLinks  name={link.name} path={link.path}/>
          </li>
        ))}
      </ul>
      <Button className='hidden lg:block me-5 bg-orange-500 hover:bg-orange-600'>Contact Us</Button>
      <MobileMenu navLinks={navlinks}/>
    </nav>
  )
}

export default Navbar