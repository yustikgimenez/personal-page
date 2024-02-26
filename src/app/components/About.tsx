import React from 'react'
import HeadSection from './HeadSection'
import Link from 'next/link'

const About = () => {
  return (
    <section id='about' className='dark:bg-gray-800 dark:text-gray-200'>
        <div className='container'>

            <HeadSection pillName='Quién soy' sectionName='Sobre mí' />

            <div className='grid xl:grid-cols-3 gap-10 items-center mb-20'>
              <div className='col-span-2'>
                <div className='text-2xl mb-2 font-semibold text-center xl:text-start'>Hola! soy <span className='bg-secondary inline-block px-3 dark:text-black'>Yustik</span></div>                  
                <p className='text-lg leading-9 text-center xl:text-start xl:pr-28'>                  
                  Soy un diseñador y desarrollador apasionado por el diseño web. 
                  Disfruto desarrollando sitios web simples, limpios y elegantes 
                  que brinden valor real al usuario final. 
                  Mis clientes han obtenido resultados excepcionales mientras 
                  trabajaban conmigo.<br />
                  Mi lema es entregar el trabajo dentro del tiempo acordado y el presupuesto 
                  que cumpla con los requisitos del cliente.             
                </p>
              </div>
              <div className='col-span-2 xl:col-span-1 text-center font-semibold'>
                  <div className='mx-auto rounded-full w-[120px] h-[120px] bg-secondary flex items-center justify-center mb-6'>
                    <span className='text-9xl text-center dark:text-gray-100'>+10</span>
                  </div>
                  <div className='text-xl'>años de experiencia <br />en diseño de sitios web</div>
              </div>
            </div>

            <div>
              <ul className='text-center md:text-start md:flex flex-wrap gap-20'>
                <li className='text-md font-semibold mb-10 md:mb-0'>
                  <span className='block text-sm font-medium mb-2 text-gray-600'>Nombre</span>
                  Yustik Gimenez
                </li>
                <li className='text-md font-semibold mb-10 md:mb-0'>
                  <span className='block text-sm font-medium mb-2 text-gray-600'>Email</span>
                  <Link href='mailto:yustikdeivis.g@gmail.com' className='hover:text-green-600 underline'>
                    yustikdeivis.g@gmail.com
                  </Link>
                </li>
                <li className='text-md font-semibold'>
                  <span className='block font-medium mb-2 text-gray-600'>Linkedin</span>
                  <Link href='https://www.linkedin.com/in/yustik/' target='_blank' className='hover:text-green-600 underline text-xs lg:text-sm'>https://www.linkedin.com/in/yustik/</Link>
                </li>
              </ul>
            </div>

        </div>
    </section>
  )
}

export default About
