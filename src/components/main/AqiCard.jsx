import React from 'react'
import { WiStrongWind } from 'react-icons/wi';

const AqiCard = () => {
   return (
     <>
       <div className="flex justify-between items-start self-stretch">
         <h1 className="text-base font-semibold">Air Quality Index</h1>
         <div className="py-[2px] px-3 W-[59px] h-[23px] flex items-center bg-[#89E589] rounded-full justify-center">
           Good
         </div>
         </div>
         <div className='flex items-center gap-4 md:gap-6 lg:gap-12 md:flex-1 self-stretch'>
            <WiStrongWind className='w-8 h-8' />
            <div className='gap-2 flex flex-col md:flex items-start flex-1'>
               <div className='flex items-start self-stretch'>
                  <div className='flex justify-end items-center gap-1 flex-1'>
                     <p className='text-xl'>23.3</p>
                     <div className='flex items-end'>
                        <p className='text-sm'>PM</p>
                        <p className='text-xs'>2.5</p>
                     </div>
                  </div>
                  <div className='flex justify-end items-center gap-1 flex-1'>
                     <p className='text-xl'>0.6</p>
                     <div className='flex items-end'>
                        <p className='text-sm'>SO</p>
                        <p className='text-xs'>2</p>
                     </div>
                  </div>
               </div>
               <div></div>
            </div>
         </div>
     </>
   );
}

export default AqiCard