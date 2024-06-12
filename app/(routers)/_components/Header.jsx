import { Button } from '@/components/ui/button'
import { BellDot, Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-4 bg-white flex justify-between '>
      <div className='flex gap-2 border p-2'>
      <Search className='h-5 w-5' />
      <input type="text" placeholder='search...' className='outline-none'/>
      </div>

      <div className='flex items-center gap-4'>

        <BellDot className='text-gray-500' />
      <Button className='bg-cyan-600' >Get Started</Button>
      </div>



    </div>
  )
}

export default Header