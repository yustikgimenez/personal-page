import React from 'react'

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


const ItemNav = () => {
  return (
    <div>
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
  )
}

export default ItemNav