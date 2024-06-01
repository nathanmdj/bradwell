import Link from "next/link"
import { Facebook, Instagram } from "react-bootstrap-icons"


const Footer = () => {
  return (
    <footer className="bg-[#0A6847] p-5">
      <h1 className="text-center text-white mb-3"> ©2024 Bradwell Sales & Marketing Corp.</h1>
      <div className="socials flex gap-3 justify-center">
        <Link href={'https://www.facebook.com/bradwellcorp'} target="_blank">
          <Facebook size={30} className="text-orange-400"/>
        </Link>
        <Link href={'https://www.instagram.com/bradwellcorp'} target="_blank">
          <Instagram size={30} className="text-orange-400"/>          
        </Link>
      </div>
    </footer>
  )
}

export default Footer