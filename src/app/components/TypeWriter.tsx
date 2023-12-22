"use client"
import { TypeAnimation } from 'react-type-animation';
import React from 'react'

const TypeWriter = () => {
  return (
    <div>
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
  )
}

export default TypeWriter