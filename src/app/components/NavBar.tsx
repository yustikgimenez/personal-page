"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logoHeader from '../../../public/images/logoHeader.png'
import { BiPhoneCall  } from "react-icons/bi";
import BtnTheme from './BtnTheme';
import MobileNav from './MobileNav';

const navigationMenu = [  
    {
        href: '#home',
        label: 'Inicio',
    },  
    {
        href: '#about',
        label: 'Sobre Mí',
    },
    {
        href: '#services',
        label: 'Servicios',
    },
    {
        href: '#projects',
        label: 'Trabajos',
    },
    {
        href: '#contact',
        label: 'Contacto',
    },
]

const NavBar = () => {
    
  return (
    <header className='py-8 xl:px-5 fixed inset-x-0 top-0 z-50 bg-primary dark:bg-black'>
        <div className='container'>
            <div className="flex justify-between items-center">
                <div>
                    <Link href="#hero">
                        <Image src={logoHeader} alt="Grupo Princz Ipasa" />
                    </Link>
                </div>
                <div className='hidden lg:block text-right'>
                    <ul className='flex space-x-7'>
                    {navigationMenu.map((item, idx) => (
                        <li key={item.label}>
                            <a href={item.href} className='text-white hover:text-green-300 text-md font-semibold hover:underline transition-all duration-300'>
                                {item.label}
                            </a>
                        </li>
                    ))}
                    </ul>
                </div>  
                <div className='flex gap-5'>
                    <Link href='tel:1121550489' className='font-semibold flex items-center text-white hover:text-green-300 text-sm xl:text-lg'>
                        <BiPhoneCall size={22} className='mr-3' />  112 155 0489
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