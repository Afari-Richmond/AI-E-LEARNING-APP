import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner '
import CourseList from './_components/CourseList'


const Page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5'>

      <div className='col-span-2'>
      <WelcomeBanner />
   <CourseList />
     

      </div>
      
      <div>
       right section
      </div>



    </div>
  )
}

export default Page