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
            name: 'Be Instructor',
            icon: GraduationCap
        }
    ]


  return (
    <div className="p-5 bg-sky-950 shadow-sm border h-screen">
        <Image src="/logo.png" alt='logo' width={170} height={80} />

        <div>
            {menu.map((item,index)=>(
                <div className="flex gap-3 mt-1 p-3 text-[20px] items-center text-white">
                  
                    <item.icon />
                    {item.name}
                </div>

            ) )}

        </div>




    </div>


  )
}

export default SideNav