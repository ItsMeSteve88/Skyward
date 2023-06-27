import React from 'react'

const AqiCard = () => {
   return (
     <>
       <div className="flex justify-between items-start self-stretch">
         <h1 className="text-base font-semibold">Air Quality Index</h1>
         <div className="py-[2px] px-3 W-[59px] h-[23px] flex items-center bg-[#89E589] rounded-full justify-center">
           Good
         </div>
       </div>
     </>
   );
}

export default AqiCard