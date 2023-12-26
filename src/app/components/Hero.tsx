import React from 'react'
import TypeWrite from './TypeWriter'
import Image from 'next/image'
import Link from 'next/link'
import { BiMouse } from "react-icons/bi";

const Hero = () => {
  return (
    <section id="home" className='h-full bg-primary min-h-screen items-center flex relative dark:bg-black'>
        <div className='container'>   
            <div className='mx-auto'>
                <div className='mb-10'>            
                    <Image 
                        priority
                        width={879 / 3} 
                        height={1122 / 3}
                        quality={100} 
                        className='pointers-events-none select-none object-cover rounded-full overflow-hidden border-8 border-white mx-auto'                         
                        src='/images/profile.png'
                        alt='Imagen de perfil' 
                    />
                </div>                 
            </div> 
            <div className='text-center uppercase mb-16 '>
                <div className='text-1xl xl:text-2xl mb-2 xl:mb-8 font-light text-white'>Hola, soy Yustik Gimenez</div>
                <div className='text-xs xl:text-3xl leading-10 font-semibold text-green-300'>
                    <TypeWrite />
                </div>
            </div>    
            <div className='flex'>
                <div className='mx-auto'>
                    <Link href="#projects" className='text-sm sm:text-md bg-gray-950 hover:bg-gray-600 text-white p-4 xl:px-10 shadow-md uppercase transition-colors duration-400 mr-5 inline-block dark:bg-green-400 dark:text-black font-semibold'>
                        Mis trabajos
                    </Link>
                    <Link href="#contact" className='text-sm sm:text-md text-white p-4 xl:px-10 underline uppercase transition-colors duration-400 items-center font-semibold hover:no-underline  inline-block'>
                        <div className='flex'>
                            Contactame
                        </div>
                    </Link> 
                </div>
            </div> 
        </div>   
        <div className='absolute inset-0 flex items-end bottom-5 justify-center text-4xl text-white'>
            <Link href='#about' className='animate-bounce'>
                <BiMouse />
            </Link>
        </div>     
    </section>
  )
}

export default Hero
