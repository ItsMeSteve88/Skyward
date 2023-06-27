import React from 'react'

const AqiCardCol = () => {
  return (
    <div className="hidden md:flex items-start flex-1">
      <div className="md:flex md:flex-col-reverse justify-center items-center gap-2 flex-1 h-[85px] lg:h-[70px]">
        <p className="md:text-2xl lg:text-3xl">23.3</p>
        <div className="flex items-end">
          <p className="text-lg">PM</p>
          <p className="text-md">2.5</p>
        </div>
      </div>
      <div className="md:flex md:flex-col-reverse justify-center items-center gap-2 flex-1 h-[85px] lg:h-[70px]">
        <p className="md:text-2xl lg:text-3xl">0.6</p>
        <div className="flex items-end">
          <p className="text-lg">SO</p>
          <p className="text-md">2</p>
        </div>
      </div>
      <div className="md:flex md:flex-col-reverse justify-center items-center gap-2 flex-1 h-[85px] lg:h-[70px]">
        <p className="md:text-2xl lg:text-3xl">0.3</p>
        <div className="flex items-end">
          <p className="text-lg">NO</p>
          <p className="text-md">2</p>
        </div>
      </div>
      <div className="md:flex md:flex-col-reverse justify-center items-center gap-2 flex-1 h-[85px] lg:h-[70px]">
        <p className="md:text-2xl lg:text-3xl">75.1</p>
        <div className="flex items-end">
          <p className="text-lg">O</p>
          <p className="text-md">3</p>
        </div>
      </div>
    </div>
  );
}

export default AqiCardCol