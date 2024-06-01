'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';


interface Props {
  name: string;
  path: string;
}
const NavLinks = ({name, path}: Props) => {
  const pathname = usePathname();

  return (
    <Link href={path}
      className={`${pathname === path ? 'text-emerald-600' : 'text-black'}  hover:text-emerald-600 `}
    >
      {name}      
    </Link>
  )
}

export default NavLinks