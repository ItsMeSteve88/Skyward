import React, { useState } from 'react'

import { IoLocationOutline, IoSearchOutline } from 'react-icons/io5'

const Navbar = () =>
{
   // const [search, setSearch] = useState('')
   const [query, setQuery] = useState('')

   const handleSearch = (e) =>
   {
      setQuery(e.target.value)
   }

   return (
     <div className="navbar navbarpos">
       <div className="w-[151px] lg:w-1/3 2xl:w-[200px] h-6 lg:h-8">
         <img
           src="/src/assets/skyward.png"
           alt="logo"
           className="lg:w-[200px]"
         />
       </div>
         <div className="hidden lg:flex w-1/3 md:h-14">
            <input type="text" placeholder="Search city..." className="w-full h-12 bg-transparent border-2 border-base-200 rounded-full outline-none text-sm px-4 relative lg:left-[150px]" onChange={handleSearch}/>
       </div>
         <div className="w-[112px] md:w-[274px] lg:w-1/3 h-12 flex justify-center md:justify-end items-center gap-4">
            <div className='flex items-center justify-center w-12 h-12 rounded-full shrink-0 border-2 border-base-200 lg:hidden hover:bg-base-200 transition'>
               <IoSearchOutline className=' w-6 h-6 '/>
            </div>
            <button type='submit' className='flex items-center justify-center w-12 md:w-[202px] md:gap-4 h-12 rounded-full shrink-0 border-2 border-base-200 bg-base-200 hover:bg-base-300 transition'>
               <IoLocationOutline className='w-6 h-6' />
               <p className='hidden md:flex '>Current Location</p>
            </button>
       </div>
     </div>
   );
}

export default Navbar