import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import HeadSection from './HeadSection';

const Form = () => {

  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    // Evitar envío múltiple mientras se está procesando
    if (isSubmitting) {
      return;
    }

    // Habilitar el estado de envío
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm('service_bsz9jxv', 'template_ncnagdc', form.current, 'e22SDw57K0tigxZfp');
      console.log(result.text);

      // Limpiar los campos del formulario
      form.current.reset();

      // Mostrar la alerta de éxito
      setShowSuccess(true);

      // Ocultar la alerta de éxito después de unos segundos
      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);
    } catch (error) {
      console.error(error.text);

      // Mostrar la alerta de error
      setShowError(true);

      // Ocultar la alerta de error después de unos segundos
      setTimeout(() => {
        setShowError(false);
      }, 4000);
    } finally {
      // Deshabilitar el estado de envío
      setIsSubmitting(false);
    }
  };

  return (
    <div>
        <HeadSection sectionName='Escribime' customStyles='text-start mb-28' />
        <div className='mb-10 text-center'>
            {/* Alerta de éxito */}
            {showSuccess && (
                <div className="custom-alert success bg-gray-800 p-5 rounded-sm text-white">
                Mensaje enviado con éxito!
                </div>
            )}

            {/* Alerta de error */}
            {showError && (
                <div className="custom-alert error bg-red-800 p-5 rounded-sm text-white">
                ¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.
                </div>
            )}
        </div>                  
        <form ref={form} onSubmit={sendEmail} className='text-sm'>
            <label className='mb-2 block'>Nombre</label>
            <input
                type="text"
                name="user_name"
                id="name"
                className="mb-10 bg-transparent block w-full
                            py-1.5 pl-2 pr-20 text-gray-900                                                        
                            border-b border-b-gray-600
                            sm:text-sm sm:leading-6
                            focus:outline-none"
                            required                                        
            />

            <label className='mb-2 block'>Email</label>
            <input
                type="text"
                name="user_email"
                id="email"
                className="mb-10 bg-transparent block w-full
                            py-1.5 pl-2 pr-20 text-gray-900                                                        
                            border-b border-b-gray-600
                            sm:text-sm sm:leading-6
                            focus:outline-none"
                            required
            />

            <label className='mb-2 block'>Mensaje</label>
            <textarea
                name="message"
                rows={8}
                className='block mb-10 w-full
                            bg-transparent border-b 
                            py-1.5 pl-2 pr-20
                            border-b-gray-600
                            focus:outline-none
                            resize-none'
                            required
            />

            <input
                type="submit"
                value={isSubmitting ? 'ENVIANDO...' : 'ENVIAR'}
                className='bg-black text-white 
                py-5 px-10 hover:bg-white hover:text-black 
                border border-black font-semibold
                transition-all duration-300
                dark:bg-green-400 dark:text-white dark:hover:bg-black dark:border-green-400 dark:hover:border-black'
                disabled={isSubmitting}
            />
        </form>
    </div>
  )
}

export default Form