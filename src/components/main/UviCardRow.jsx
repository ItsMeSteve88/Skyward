import React from 'react'

// eslint-disable-next-line react/prop-types
const UviCardRow = ({ summary, uvi }) =>
{
   
  return (
     <div className= 'w-full h-[70px] md:h-[80px] lg:h-[70px] p-2 overflow-scroll'>
        <p>Uvi Today: {uvi}</p>
        <p>{summary}</p>
    </div>
  )
}

export default UviCardRow