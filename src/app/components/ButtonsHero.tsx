import React from 'react'
import Link from 'next/link'

const ButtonsHero = () => {
  return (
    <div className='flex'>
        <div className='mx-auto'>
            <Link href="#projects" className='text-sm sm:text-md bg-gray-950 hover:bg-gray-600 text-white p-4 xl:px-10 shadow-md uppercase transition-colors duration-400 mr-2 xl:mr-5 inline-block dark:bg-green-400 dark:text-black font-semibold'>
                Mis trabajos
            </Link>
            <Link href="#contact" className='text-sm sm:text-md text-white p-4 xl:px-10 underline uppercase transition-colors duration-400 items-center font-semibold hover:no-underline  inline-block'>
                <div className='flex'>
                    Contactame
                </div>
            </Link> 
        </div>
    </div> 
  )
}

export default ButtonsHero