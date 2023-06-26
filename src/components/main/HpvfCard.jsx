/* eslint-disable react/prop-types */
import React from 'react'


const HpvfCard = ({title, percent, hPa, km, degrees, icon}) => {
  return (
     <div className="w-[248px] md:w-[174px] lg:w-[320px] h-[106px] md:h-[120px] lg:h-[150px] p-4 gap-5 bg-base-200 rounded-2xl flex flex-col items-start self-stretch">
        <h1 className='text-base font-semibold'>{title}</h1>
        <div className='flex justify-between items-center self-stretch'>
           {icon}
           <p className=' text-xl'>{percent || hPa || km || degrees}</p>
        </div>
    </div>
  )
}

export default HpvfCard