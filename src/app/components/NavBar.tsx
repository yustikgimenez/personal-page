"use client"
import React from 'react'
import Link from 'next/link'
import { BiPhoneCall  } from "react-icons/bi";
import BtnTheme from './BtnTheme';
import MobileNav from './MobileNav';
import ItemNav from './ItemNav';
import Brand from './Brand';


const NavBar = () => {
  return (
    <header className='py-8 xl:px-5 fixed inset-x-0 top-0 z-50 bg-primary dark:bg-black'>
        <div className='container'>
            <div className="flex justify-between items-center">
                <div>
                    <Brand />
                    
                </div>
                <div className='hidden lg:block text-right'>
                    <ItemNav />
                </div>  
                <div className='flex gap-5'>
                    <Link aria-label='Telefono de contacto' href='tel:1121550489' 
                    className='font-semibold flex items-center
                    text-white hover:text-green-300 
                    text-sm xl:text-lg'>
                        <BiPhoneCall size={22} className='mr-3' />  <span className='hidden md:inline-block'>112 155 0489</span>
                    </Link>
                    <BtnTheme />
                    <MobileNav />
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar