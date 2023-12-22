import React from 'react'
import HeadSection from './HeadSection'
import { BiCodeBlock, BiPaperPlane, BiPen, BiDesktop, BiPalette } from "react-icons/bi";

const services = [
    {
        icon: <BiPalette className='mx-auto mb-5' size={74} />,
        title: 'Diseño gráfico',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.',
    },
    {
        icon: <BiDesktop className='mx-auto mb-5' size={74} />,
        title: 'Diseño web',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.',
    },
    {
        icon: <BiPen className='mx-auto mb-5' size={74} />,
        title: 'Diseño ux/ui',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.',
    },
    {
        icon: <BiCodeBlock className='mx-auto mb-5' size={74} />,
        title: 'Desarrollo web',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.',
    },
    {
        icon: <BiPaperPlane className='mx-auto mb-5' size={74} />,
        title: 'SEO',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text.',
    },
]

const iconStyle = {
    fontSize: '3rem',  
    margin: 'auto',  
    marginBottom: '5px',
};

const WhatIDo = () => {
  return (
    <section id='services' className='bg-gray-100'>
        <div className='container'>
            <HeadSection pillName='Lo que hago' sectionName='Servicios' />
            <div className='grid xl:grid-cols-3 grid-rows-2 gap-32 text-center'>
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