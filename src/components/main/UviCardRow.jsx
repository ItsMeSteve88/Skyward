import React from 'react'

// eslint-disable-next-line react/prop-types
const UviCardRow = ({ summary, uvi, uviText }) =>
{
   
  return (
    <div className="uvi">
      <div className='w-full'>
        <h2
          className={`text-base 2xl:text-lg font-semibold
        
        `}
        >
          Uvi Today:{" "}
          <span
            className={`
                 ${uviText === "Low" ? "text-[#1a8f09]" : "text-[#1a8f09]"}
         ${uviText === "Medium" ? "text-[#deb70b]" : "text-[#deb70b]"}
         ${uviText === "High" ? "text-[#de740b]" : "text-[#de740b]"}
         ${uviText === "Very High" ? "text-[#de0b0b]" : "text-[#de0b0b]"}
         ${uviText === "Extremely High" ? "text-[#940bde]" : "text-[#940bde]"}
                 `}
          >
            {uvi}
          </span>
        </h2>
        <p className='text-sm md:text-lg'>{summary}</p>
        </div>
    </div>
  );
}

export default UviCardRow