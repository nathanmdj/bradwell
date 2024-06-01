'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import { Justify, X } from 'react-bootstrap-icons'
import Link from 'next/link'
import NavLinks from './NavLinks'

interface Props {
  navLinks: [{
    name: string;
    path: string;
  }]
}
const MobileMenu = ({navlinks}) => {
  const [show, setShow] = useState(false)
  
  const handleShow = () => {
    setShow(true)
  }
  const handleClose = () => {
      setShow(false)
    }

  return (
    <div className="mobile-menu me-5 lg:hidden">
      <Button 
        type='button'
        onClick={handleShow}
      >
        <Justify size={30}/>
      </Button>
      <div className={`${show ? 'block' : 'hidden'} absolute top-0 left-0 right-0  z-10 bg-white pb-20`}>
        <div className="flex justify-end p-2">
          <Button 
            type='button'
            className='!bg-transparent px-0'
            onClick={handleClose}
          >
            <X size={50} className='text-black'/>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          {navlinks?.map((link, i)=> (
            <div key={i} onClick={handleClose} className='text-xl font-bold'>
              <NavLinks name={link.name} path={link.path}/>
            </div>
          ))}
        <Button className='lg:block mt-5 bg-orange-500 hover:bg-orange-600'>Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu