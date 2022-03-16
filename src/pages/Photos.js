import React, { useContext } from 'react'
import { getClass } from '../utils'
import Image from '../components/Image'
import { Context } from '../Context'

function Photos() {
  const { allPhotos } = useContext(Context)

  const imageElements = allPhotos.map((img, i) => (
      <Image key={img.id} img={img} className={getClass(i)} />
  ))
   
  return (
    <div className='bg-slate-500 bg-auto bg-fixed bg-center bg-no-repeat md:w-screen m-auto md:m-auto h-screen md:h-screen'>
      <main className='photos bg-slate-500'>
          {imageElements}
      </main>
    </div>
  )
}
 
export default Photos

