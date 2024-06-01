import Image from 'next/image';
import Link from 'next/link';

interface Props {
  name: string;
  path: string;
  imgLink: string;
}
const ProductCategory = ({name, path, imgLink}: Props) => {
  return (
    <Link href={path} className='w-[150px] lg:w-[200px] hover:scale-110 ease-in-out duration-300'>
      <div className="rounded-full bg-emerald-600 p-2">
        <Image src={imgLink} width={200} height={200} alt={name} className='rounded-full'/>
      </div>
      <h2 className='text-xl lg:text-2xl font-bold text-center text-wrap'>{name}</h2>
    </Link>
  )
}

export default ProductCategory