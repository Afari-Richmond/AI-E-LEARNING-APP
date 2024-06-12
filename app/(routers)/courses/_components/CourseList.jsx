import React, { useEffect } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import GlobalApi from '@/app/_utils/GlobalApi'
  
  



const CourseList = () => {
  useEffect(()=>{
    getAllCourses();

  } ,[])



  const getAllCourses=()=>{
    GlobalApi.getAllCourseList().then(resp=>{
      console.log(resp);
    })
  }





  return (
  
      <div className='p-5 bg-white rounded-lg mt-3'>
      <div className='flex items-center justify-between'>
      <h2 className='text-[20px] font-bold text-cyan-600'> All Courses</h2>

      <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Filter" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">All</SelectItem>
    <SelectItem value="dark">Paid</SelectItem>
    <SelectItem value="system">Free</SelectItem>
  </SelectContent>
</Select>

      

    

</div>
  </div>
  )
}

export default CourseList