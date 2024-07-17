"use client"

import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner '
import CourseList from './_components/CourseList'
import SideBanner from './_components/SideBanner'
import CourseThumbnail from './_components/coursePage'
import Footer from './_components/footer'
import Chatbot from './_components/chatbot'


const Page = () => {
  return (

    <>
    <div className='grid grid-cols-1 md:grid-cols-3 p-5'>

      <div className='col-span-2'>
      <WelcomeBanner />
   <CourseList />
   <CourseThumbnail />
     

      </div>
      
      <div>
        <SideBanner />
        <Chatbot />
        
       
       
      </div>



    </div>

    <Footer />

    </>

    
  )
}

export default Page