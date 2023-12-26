"use client"
import { TypeAnimation } from 'react-type-animation';
import React from 'react'

const TypeWriter = () => {
  return (
    <div className='text-center uppercase mb-16 '>
      <div className='text-1xl xl:text-2xl mb-2 xl:mb-8 font-light text-white'>Hola, soy Yustik Gimenez</div>
      <div className='text-xs xl:text-3xl leading-10 font-semibold text-green-300'>
      <TypeAnimation
          sequence={[            
              'desarrollador Web',
              1000, 
              'Diseñador web',
              1000,
              'Diseñador ux/ui',
              1000
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
      </div>
    </div>
  )
}

export default TypeWriter