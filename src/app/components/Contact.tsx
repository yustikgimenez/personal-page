"use client"
import Link from 'next/link';
import HeadSection from './HeadSection';
import { BiEnvelope, BiLogoWhatsapp, BiLogoLinkedin, BiLogoInstagram } from "react-icons/bi";
import Form from './Form';

const social = [
    {
        icon: <BiLogoLinkedin />,
        link: 'https://www.linkedin.com/in/yustik/',
    },
    {
        icon: <BiLogoInstagram />,
        link: 'https://www.instagram.com/soy.yustik/',
    },
]

const Contact = () => {
  return (
    <section id='contact' className='bg-secondary h-auto'>
        <div className='container'>
            <div className='grid xl:grid-cols-2 gap-64'>
                <div>
                    <HeadSection sectionName='Estemos en contacto' customStyles='text-start mb-16' />
                    <p className='leading-10 mb-36'>
                        Disfruto discutiendo nuevos proyectos y desafíos de diseño. 
                        Comparta tanta información como sea posible para que podamos 
                        aprovechar al máximo nuestra primera conversación.
                    </p>
                    <div className='text-gray-800 mb-10'>
                        <span className='block text-sm font-medium mb-2 text-gray-600'>Hablemos:</span>
                        <Link href='https://wa.me/5491121550489?text=Hola,%20quisiera%20solicitar%20un%20presupuesto' target='_blank' className='font-semibold flex items-center text-sm xl:text-lg'>
                            <BiLogoWhatsapp size={34} className='mr-3' /> 1121550489
                        </Link>
                    </div>
                    <div className='text-gray-800 mb-16'>
                        <span className='block text-sm font-medium mb-2 text-gray-600'>Escribime:</span>
                        <Link href='mailto:yustikdeivis.g@gmail.com' className='font-semibold flex items-center text-sm xl:text-lg'>
                            <BiEnvelope size={34} className='mr-3' /> yustikdeivis.g@gmail.com
                        </Link>
                    </div> 


                    <ul className='flex flex-wrap text-3xl items-center gap-3'>
                        {social.map((social, idxSocial)  => (
                            <li className='bg-gray-800 p-3 rounded-sm text-white hover:bg-white hover:text-black transition-all duration-300' key={idxSocial}>
                                <Link href={social.link} target='_blank'>
                                    {social.icon}
                                </Link>
                            </li>
                        ))}                    
                    </ul>     

                </div>
                <div>
                    <Form />
                </div>
            </div>
        </div>

        

    </section>
  )
}

export default Contact