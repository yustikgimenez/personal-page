"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import logoHeader from '../../../public/images/logoHeader.png'
import { BiPhoneCall, BiMenu  } from "react-icons/bi";
import { GrClose } from 'react-icons/gr';
import { BiChevronRight } from 'react-icons/bi';

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

    const [navOpen, setNavOpen] = useState(false);

    const [dimension, setDimension] = useState({
        height: 0,
        width: 0,
    });

    const mobileMenuHandler = () => {
        setNavOpen(!navOpen);
    }

    useEffect(() => {
        function handleResize() {
        setDimension({
            height: window.innerHeight,
            width: window.innerWidth,
        });

        if (dimension.width > 768 && navOpen) {
            setNavOpen(false);
        }
        }

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, [navOpen, dimension.width]);
    
  return (
    <header className='py-8 xl:px-5 fixed inset-x-0 top-0 z-50 bg-primary'>
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
            

            <div className='flex'>
                <Link href='tel:1121550489' className='font-semibold flex items-center text-white hover:text-green-300 text-sm xl:text-lg'>
                    <BiPhoneCall size={22} className='mr-3' />  112 155 0489
                </Link>
                
                <button className='block lg:hidden text-white ml-5' onClick={mobileMenuHandler}>
                    <BiMenu  className='text-3xl' />
                </button>
                
                <div className={navOpen ? "py-0 block fixed w-screen z-[9999]" : "py-0 hidden fixed w-screen z-[9999]"}>
                    <div className='h-screen w-screen z-[999] top-0 fixed bg-black bg-opacity-50' onClick={mobileMenuHandler}>
                        <div className='bg-gray-900 w-[250px] top-0 right-0 z-[9999] h-screen fixed'>
                            <div className='h-14 px-10 border-b flex items-center'>
                            <button className='flex items-center space-x-3 text-white' onClick={mobileMenuHandler}>
                                <GrClose />
                                <span>Cerrar</span>
                            </button>
                            </div>
                            <div className='h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth'>
                                <ul className='block mb-7'>
                                    {navigationMenu.map((item, idx) => (
                                    <li key={item.label}>
                                        <a href={item.href} className='group flex items-center py-2 duration-300 transition-all ease-in-out hover:text-secondary text-white'>
                                        <span>{item.label}</span>
                                        <span className='left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3'>
                                            <BiChevronRight className='text-xl' />
                                        </span>
                                        </a>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            </div>
        </div>

    </header>
  )
}

export default NavBar