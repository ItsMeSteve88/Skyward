/* eslint-disable react/prop-types */
import React from 'react'
import { WiStrongWind } from 'react-icons/wi';
import AqiCardRow from './AqiCardRow';
import AqiCardCol from './AqiCardCol';

const AqiCard = () =>
{
   return (
     <>
       <div className="flex justify-between items-start self-stretch">
         <h1 className="text-base font-semibold">Air Quality Index</h1>
         <div className="py-[2px] px-3 W-[59px] h-[23px] flex items-center bg-[#89E589] rounded-full justify-center">
           Good
         </div>
       </div>
       <div className="flex items-center gap-4 md:gap-6 lg:gap-12 md:flex-1 self-stretch">
         <WiStrongWind className="w-8 md:w-9 lg:w-12 h-8 md:h-9 lg:h-12" />
            <AqiCardCol />
            <AqiCardRow />
       </div>
     </>
   );
}

export default AqiCard