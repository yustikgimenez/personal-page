import React from 'react'
import Link from 'next/link'
import { BiMouse } from "react-icons/bi";

const MouseNext = () => {
  return (
    <div className='hidden absolute left-1/2 lg:flex items-end bottom-5 justify-center text-4xl text-white'>
        <Link href='#about' className='animate-bounce'>
            <BiMouse />
        </Link>
    </div>   
  )
}

export default MouseNext