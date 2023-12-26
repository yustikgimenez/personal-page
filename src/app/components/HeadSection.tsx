import React from 'react'
import { HeadSectionProps } from '../../../types'

const HeadSection = ({ pillName, sectionName, customStyles }:HeadSectionProps) => {
  return (
    <div className={`text-center mb-24 ${customStyles}`}>
        <div className='sectionPill dark:bg-black dark:text-white'>{pillName}</div>
        <div className='sectionTitle dark:text-white'>{sectionName}</div>
    </div>
  )
}

export default HeadSection