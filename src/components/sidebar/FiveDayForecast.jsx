import React from 'react'
import FiveDayRow from './FiveDayRow'

const FiveDayForecast = () => {
  return (
     <div className='fivedayforecast'>
        <h1 className='pb-3 h-[37px]'>5 Day Forecast</h1>
        <div className='fivedaycard'>
           <FiveDayRow/>
           <FiveDayRow/>
           <FiveDayRow/>
           <FiveDayRow/>
           <FiveDayRow/>
        </div>
     </div>
  )
}

export default FiveDayForecast