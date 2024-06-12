import React from 'react'
import Image from 'next/image';
const WelcomeBanner = () => {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl p-5'> 
        <Image src='/banner.jpg' alt='welcome' width={100} height={100} />
       <div>
       <h2 className='font-bold text-[29px]'>
          Welcome To <span className='text-cyan-600' > Learn Mate AI </span> App
        </h2>
        <h2 className='text-gray-500' >Explore, Learn And Build</h2>

       </div>


    </div>
  )
}

export default WelcomeBanner