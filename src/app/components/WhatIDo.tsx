import React from 'react'
import HeadSection from './HeadSection'
import { BiCodeBlock, BiPaperPlane, BiPen, BiDesktop, BiPalette } from "react-icons/bi";

const services = [
    {
        icon: <BiPalette className='mx-auto mb-5' size={74} />,
        title: 'Diseño gráfico',
        text: '¡Soy apasionado por dar vida a ideas! mi enfoque en el diseño gráfico es transformar conceptos en imágenes que hablan por sí mismas.',
    },
    {
        icon: <BiDesktop className='mx-auto mb-5' size={74} />,
        title: 'Diseño web',
        text: '¿Quieres que tu presencia en línea sea única? Con el diseño web, creo sitios que no solo lucen increíbles sino que también reflejan tu personalidad. Desde una página personal hasta un blog, cada diseño es una extensión de ti.',
    },
    {
        icon: <BiPen className='mx-auto mb-5' size={74} />,
        title: 'Diseño ux/ui',
        text: 'Mi misión es hacer que tu experiencia en línea sea asombrosa. Con el diseño de experiencia de usuario (UX) y diseño de interfaz de usuario (UI), me aseguro de que cada clic sea intuitivo y cada interacción sea tan agradable como sea posible.',
    },
    {
        icon: <BiCodeBlock className='mx-auto mb-5' size={74} />,
        title: 'Desarrollo web',
        text: 'Transformo ideas en realidad digital. A través del desarrollo web, construyo sitios que se adaptan a tus necesidades. Ya sea un proyecto personal o una plataforma interactiva, estoy aquí para convertir tus sueños digitales en código.',
    },
    {
        icon: <BiPaperPlane className='mx-auto mb-5' size={74} />,
        title: 'SEO',
        text: 'Hago que tu voz sea escuchada en la vastedad de la web. Con estrategias de SEO, trabajo para que tu contenido destaque. Desde palabras clave hasta contenido cautivador, estoy aquí para impulsar tu visibilidad en línea.',
    },
]

const iconStyle = {
    fontSize: '3rem',  
    margin: 'auto',  
    marginBottom: '5px',
};

const WhatIDo = () => {
  return (
    <section id='services' className='bg-gray-100 dark:bg-gray-600'>
        <div className='container'>
            <HeadSection pillName='Lo que hago' sectionName='Servicios' />
            <div className='grid xl:grid-cols-3 grid-rows-2 gap-32 text-center dark:text-white'>
                {services.map((item, idx) => (
                    <div key={idx}>
                        <div style={iconStyle} className='text-green-400'>{item.icon}</div>
                        <div className='font-semibold text-2xl mb-4'>{item.title}</div>
                        <div className='text-sm leading-6 text-justify'>{item.text}</div>
                    </div>
                ))}                
            </div>
        </div>
    </section>
  )
}

export default WhatIDo