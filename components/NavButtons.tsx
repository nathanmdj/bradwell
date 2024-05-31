'use client'

import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight, Grid3x2Gap } from "react-bootstrap-icons"

const NavButtons = () => {
  const pathname = usePathname();
  return (
    <div className={`absolute right-0 top-1/2 -translate-y-2/3 ${pathname === '/products' ? 'hidden' : 'block'}`}>
      <div  className="border border-emerald-700">
        <Button className="bg-transparent hover:bg-transparent text-black block h-[60px] hover:text-orange-500">
          <ArrowRight size={30}/>
        </Button>
      </div>
      <div className="border border-emerald-700 group">
        <Button className="bg-transparent hover:bg-transparent text-black block h-[30px] pb-0 group-hover:text-orange-500">
          <Grid3x2Gap size={30}/>
        </Button>
        <p className="text-center mb-2 text-xs font-bold group-hover:text-orange-500">ALL</p>
      </div>
      <div className="border border-emerald-700">
        <Button className="bg-transparent hover:bg-transparent text-black block h-[60px]  hover:text-orange-500">
          <ArrowLeft size={30}/>
        </Button>
      </div>
    </div>
  )
}

export default NavButtons