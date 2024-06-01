import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="mt-20 flex flex-col justify-center items-center gap-10">
      <h1 className='text-3xl text-stone-400 font-bold'>404</h1>
      <h1 className='text-3xl font-extrabold'>You have found a secret place.</h1>
      <p className='text-wrap px-56 text-center'>Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.</p>

      <Link href={'/'} className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" aria-label={'Home'}>Take me back to home page</Link>
    </div>
  )
}

export default NotFound