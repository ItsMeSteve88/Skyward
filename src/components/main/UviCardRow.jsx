import React from 'react'

const UviCardRow = ({ summary, uvi }) =>
{
   
  return (
     <div className='bg-red-300 w-full h-[70px] p-2'>
        <p>Uvi Today: {uvi}</p>
        <p>{summary}</p>
    </div>
  )
}

export default UviCardRow