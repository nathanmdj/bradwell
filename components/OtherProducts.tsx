import Image from "next/image";

interface Props {
  name: string;
  imgLink: string;
}

const OtherProducts = ({name, imgLink}: Props) => {
  return (
    <div className="w-[150px] lg:w-[200px]">
      <div className="rounded-full bg-white p-2">
       <Image src={imgLink} width={200} height={200} alt={name} className='rounded-full'/>
      </div>
      <h2 className='text-xl font-bold text-center text-wrap'>{name}</h2>
    </div>
  )
}

export default OtherProducts