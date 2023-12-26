import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import logoHeader from '../../../public/images/logoHeader.png'

const Brand = () => {
  return (    
    <Link href="#hero">
        <Image src={logoHeader} alt="Grupo Princz Ipasa" />
    </Link>    
  )
}

export default Brand