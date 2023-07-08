import React from 'react'

const UviCardRow = ({summary}) => {
  return (
     <div className='bg-red-300 w-[265px] h-[70px] p-2'>
        <p>{summary}</p>
    </div>
  )
}

export default UviCardRow