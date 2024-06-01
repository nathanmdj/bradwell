'use client'
import {motion} from 'framer-motion'
import { Envelope, Geo, GeoFill, Phone,   } from 'react-bootstrap-icons';
import {  PhoneCall } from 'lucide-react'
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {

  const emailVariant = {
    initial: {y: -100, opacity: 0},
    animate: {y: 0, opacity: 1}
  };
  return (
    <section className='container my-10'>
      <h1 className='text-3xl font-bold text-center mb-10 lg:mb-16'>Contact Us</h1>
      <motion.div className="grid md:grid-cols-2 gap-4 "
        variants={emailVariant}
        initial='initial'
        animate='animate'
        transition={{duration: 0.3, delay: 0.3}}
      >
        <div className='lg:px-3 col-span-1'>
          <h1 className='text-lg font-bold mb-5'>For your inquiries and suggestions, please don&apos;t hesitate to contact us.</h1>
          <div className="flex mt-3">
            <Geo size={30} className='text-emerald-500 min-w-8'/>
            <span className='ms-3'>84 Malakas St. Brgy. Pinyahan Quezon City</span>
          </div>

          <div className="flex mt-3">
            <PhoneCall size={30} className='text-emerald-500 min-w-8'/>
            <span className='ms-3'>(+632) 8295-5835 | 8277-9577 | 8277-7122</span>
          </div>

          <div className="flex mt-3">
            <Phone size={30} className='text-emerald-500 min-w-8'/>
            <span className='ms-3'>639 992 5585302 | 639 966 6432128 | 639 977 7122</span>
          </div>

          <div className="flex mt-3">
            <Envelope size={30} className='text-emerald-500 min-w-8'/>
            <span className='ms-3'>armand@bradwell.ph</span>
          </div>

        </div>

        <div className="col-span-1">
          <ContactForm/>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactPage