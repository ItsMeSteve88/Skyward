/* eslint-disable react/prop-types */
import React from 'react'
import { TbUvIndex } from "react-icons/tb";
// import { WiStrongWind } from 'react-icons/wi';
// import AqiCardRow from './AqiCardRow';
// import AqiCardCol from './AqiCardCol';
import UviCardRow from './UviCardRow';

const AqiCard = ({weather: {uvi}}) =>
{
   let uviText;
   let uviBgColor;
   let uviSummary;
   if (uvi < 3)
   {
      uviText = 'Low';
      uviBgColor = '#1a8f09';
      uviSummary = 'The UVI is low, no protection is required.';
   } else if
      (uvi < 5)
   {
      uviText = 'Medium';
      uviBgColor = '#1a8f09';
      uviSummary = 'The UVI is medium, protection is required.';
   } else if
      (uvi < 7)
   {
      uviText = 'High';
      uviBgColor = '26, 143, 9';
      uviSummary = 'The UVI is high, protection is required.';
   } else if
      (uvi < 10)
   {
      uviText = 'Very High';
      uviBgColor = '#1a8f09';
      uviSummary = 'The UVI is very high, extra protection is required.';
   } else if 
      (uvi === 11)
   {
      uviText = 'Extreme';
      uviBgColor = '#1a8f09';
      uviSummary = 'The UVI is extremely high, extra protection is required.';
   } else  
   {
      uviText = 'Unknown';
      uviBgColor = '#1a8f09';
      uviSummary = 'The UVI data is unavailable.';
   }

   return (
     <>
       <div className="flex justify-between items-start self-stretch">
         <h1 className="text-base font-semibold">Ultraviolet Index</h1>
            <div className={`
         py-[2px]
         px-3 W-[59px]
         h-[23px]
         flex
         items-center
         bg-${uviBgColor}
         rounded-full
         justify-center
         `}>
           {uviText}
         </div>
       </div>
       <div className="flex items-center gap-4 md:gap-6 lg:gap-12 md:flex-1 self-stretch">
            <TbUvIndex className="w-8 md:w-10 lg:w-12 h-8 md:h-9 lg:h-12" />
            <UviCardRow summary={uviSummary} uvi={uvi} />
            {/* <AqiCardCol />
            <AqiCardRow /> */}
       </div>
     </>
   );
}

export default AqiCard