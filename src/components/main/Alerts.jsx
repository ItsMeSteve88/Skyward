/* eslint-disable react/prop-types */
import React from 'react'

const Alerts = ({items}) => {
  return (
     <div className='mt-2 rounded-2xl'>
        <h2 className='text-lg font-semibold flex-1 mb-2'>Alerts</h2>
        {items?.length > 0 ? (
        items?.map((item, index) => (
          <div key={index} className="w-full bg-base-200 p-2 rounded-2xl">
              <p className="text-base font-medium uppercase 2xl:text-md">Sender: {item.sender_name}</p>
              <p className='text-base font-medium uppercase 2xl:text-md'>Event: {item.event}</p>
              <p className='mb-4'>{item.description}</p>
            </div>
          ))
          ) : (
        <p className="font-medium uppercase flex items-center justify-center h-36 relative -top-6">No Alerts for this location</p>
        )}

    </div>
  )
}

export default Alerts