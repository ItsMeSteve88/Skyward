/* eslint-disable react/prop-types */
import React from 'react'


const HpvfCard = ({title, value, percent, hPa, km, degrees, icon}) => {
  return (
     <div className="hpvfcard">
        <h1 className='text-base font-semibold shrink-0'>{title}</h1>
        <div className='flex justify-between items-center self-stretch 2xl:text-3xl'>
           {icon}
           <p className='text-xl'><span className='text-xl lg:text-3xl 2xl:text-4xl'>{value}</span>{percent || hPa || km || degrees}</p>
        </div>
    </div>
  )
}

export default HpvfCard