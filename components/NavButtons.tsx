'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Grid3x2Gap } from "react-bootstrap-icons"

const navLinks = [
  {
    id: 1,
    path: "/products/beverages",
  },
  {
    id: 2,
    path: "/products/meat-processing",
  },
  {
    id: 3,
    path: "/products/sauces",
  },
]
const NavButtons = () => {
  const pathname = usePathname();
  const [nextLink, setNextLink] = useState('');
  const [prevLink, setPrevLink] = useState('');

  useEffect(() => {
    const currentIndex = navLinks.findIndex(link => link.path === pathname);
    if(currentIndex < navLinks.length - 1){
      setNextLink(navLinks[currentIndex + 1]?.path || '');
    } else {
      setNextLink(navLinks[0]?.path || '');
    }

    if(currentIndex > 0){
      setPrevLink(navLinks[currentIndex - 1]?.path || '');
    } else {
      setPrevLink(navLinks[navLinks.length - 1]?.path || '');
    }
   
  }, [pathname]);
  
  return (
    <div className={`absolute right-0 top-1/2 -translate-y-2/3 ${pathname === '/products' ? 'hidden' : 'block'}`}>
      <div  className="border border-emerald-700">
        <Link href={nextLink} className="bg-transparent hover:bg-transparent text-black h-[60px] hover:text-orange-500 flex justify-center items-center">
          <ArrowRight size={30}/>
        </Link>
      </div>
      <div className="border border-emerald-700 group hover:cursor-pointer">
        <Link href={'/products'}
          className="bg-transparent hover:bg-transparent text-black  h-[30px] pb-0 group-hover:text-orange-500 flex justify-center">
          <Grid3x2Gap size={30}/>
        </Link>
        <p className="text-center mb-2 text-xs font-bold group-hover:text-orange-500">ALL</p>
      </div>
      <div className="border border-emerald-700 px-3">
        <Link href={prevLink} className="bg-transparent hover:bg-transparent text-black h-[60px]  hover:text-orange-500 flex justify-center items-center">
          <ArrowLeft size={30}/>
        </Link>
      </div>
    </div>
  )
}

export default NavButtons