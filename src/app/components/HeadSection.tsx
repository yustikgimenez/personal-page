import React from 'react'
import { HeadSectionProps } from '../../../types'

const HeadSection = ({ pillName, sectionName, customStyles }:HeadSectionProps) => {
  return (
    <div className={`text-center mb-24 ${customStyles}`}>
        <div className='sectionPill'>{pillName}</div>
        <div className='sectionTitle'>{sectionName}</div>
    </div>
  )
}

export default HeadSection