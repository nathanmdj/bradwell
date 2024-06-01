'use client'
import { useState } from 'react'
import { Button } from './ui/button'
import {  List, X } from 'react-bootstrap-icons'
import NavLinks from './NavLinks'
import Link from 'next/link'

interface Props {
  navLinks: {
    name: string;
    path: string;
  }[];
}
const MobileMenu = ({navLinks}: Props) => {
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
        variant={'outline'}
        type='button'
        onClick={handleShow}
        className='bg-orange-500'
      >
        <List size={30} color='white'/>
      </Button>
      <div className={`${show ? 'block' : 'hidden'} absolute top-0 left-0 right-0 bottom-0 z-10 bg-white pb-20 ease-in-out duration-5000`}>
        <div className="flex justify-end p-5">
          <Button 
            type='button'
            className='!bg-transparent px-0'
            onClick={handleClose}
          >
            <X size={50} className='text-black'/>
          </Button>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          {navLinks?.map((link, i)=> (
            <div key={i} onClick={handleClose} className='text-xl font-bold'>
              <NavLinks name={link.name} path={link.path}/>
            </div>
          ))}
        <Link 
          href={'/contact-us'} 
          className='lg:block mt-5 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg'
          onClick={handleClose}
          >Contact Us</Link>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu