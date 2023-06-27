import React from 'react'

const AqiCardRow = () => {
  return (
    <div className="gap-2 flex flex-col md:hidden items-start flex-1">
      <div className="flex items-start self-stretch">
        <div className="flex justify-end items-center gap-1 flex-1">
          <p className="text-xl">23.3</p>
          <div className="flex items-end">
            <p className="text-sm">PM</p>
            <p className="text-xs">2.5</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-1 flex-1">
          <p className="text-xl">0.6</p>
          <div className="flex items-end">
            <p className="text-sm">SO</p>
            <p className="text-xs">2</p>
          </div>
        </div>
      </div>
      <div className="flex items-start self-stretch">
        <div className="flex justify-end items-center gap-1 flex-1">
          <p className="text-xl">0.3</p>
          <div className="flex items-end">
            <p className="text-sm">NO</p>
            <p className="text-xs">2</p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-1 flex-1">
          <p className="text-xl">75.1</p>
          <div className="flex items-end">
            <p className="text-sm">O</p>
            <p className="text-xs">3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AqiCardRow