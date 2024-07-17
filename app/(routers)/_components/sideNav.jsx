import { BadgeIcon, BookOpen, GraduationCap, Key } from 'lucide-react'
import React from 'react'
import Image from 'next/image';

const SideNav = () => {
    const menu = [
        {
            id: 1,
            name: 'All Courses',
            icon: BookOpen
        },

        {
            id: 2,
            name: 'Membership',
            icon: BadgeIcon
        },
        {
            id: 3,
            name: 'Take Quiz',
            icon: GraduationCap
        }
    ]


  return (
    <div className="  p-5 bg-white shadow-sm border h-screen">
        <Image src="/logo.png" alt='logo' width={160} height={50} className='cursor-pointer'/>

        <hr className='mt-5'/>

        <div className='mt-2'>
            {menu.map((item,index)=>(
                <div className="group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-500 cursor-pointer 
                hover:bg-cyan-600 hover:text-white rounded-md  transition-all ease-in-out duration-200">
                  
                    <item.icon className="group-hover:animate-bounce " />
                    {item.name}
                </div>

            ) )}

        </div>




    </div>


  )
}

export default SideNav