import React, { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoLocationOutline, IoSearchOutline } from 'react-icons/io5'

const Navbar = ({setQuery, query, units, setUnits}) =>
{
   // const [search, setSearch] = useState('')
   const [city, setCity] = useState('')
   
   const handleSearchClick = () =>
   {
      if (city !== '')
      {
      setQuery({q: city})
      setCity('')
    }
   }
   
   const handleLocationClick = () =>
   {
      if (navigator.geolocation)
       toast.info(`Fetching weather for your current location`);
    {
      navigator.geolocation.getCurrentPosition((position) => {
        setQuery({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    }
   }
   
   const handleUnitsChange = (e) =>
   {
     const selectedUnit = e.currentTarget.name
     if(units !== selectedUnit)
       setUnits(selectedUnit)
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
       <div className="hidden lg:flex lg:justify-between w-1/3 md:h-14">
         <div className="w-[330px]">
           <input
             type="text"
             value={city}
             placeholder="Search city..."
             className="md:lg-48 2xl:w-full h-12 bg-transparent border-t-2 border-l-2 border-b-2 border-base-200 rounded-l-full outline-none text-sm px-4 relative lg:left-[150px]"
             onChange={(e) => setCity(e.currentTarget.value)}
           />
         </div>
         <button
           onClick={handleSearchClick}
           className="border-t-2 border-r-2 border-b-2 rounded-r-full md:h-12 border-base-200 flex items-center justify-center p-2 bg-base-300 hover:bg-base-200 transition"
         >
           <IoSearchOutline className="w-6 h-6" />
         </button>
       </div>
       <div className="w-[112px] md:w-[274px] lg:w-1/3 h-12 flex justify-center md:justify-end items-center gap-4">
         <div className="drawer drawer-end">
           <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
           <div className="drawer-content">
             {/* Page content here */}
             <label
               htmlFor="my-drawer-4"
               className="drawer-button flex items-center justify-center w-12 h-12 rounded-full shrink-0 border-2 border-base-200 lg:hidden hover:bg-base-200 transition"
             >
               <IoSearchOutline className=" w-6 h-6 " />
             </label>
           </div>
           <div className="drawer-side">
             <label htmlFor="my-drawer-4" className="drawer-overlay "></label>
             <ul className="menu p-4 w-80 h-full bg-base-content text-base-content">
               {/* Sidebar content here */}
               <li>
                 <div className="lg:hidden w-1/3 md:h-14">
                   <div className="w-[180px]">
                     <input
                       type="text"
                       value={city}
                       placeholder="Search city..."
                       className="h-12 bg-transparent border-t-2 border-l-2 border-b-2 border-base-200 rounded-l-full outline-none text-sm px-4 relative lg:left-[150px] text-base-200"
                       onChange={(e) => setCity(e.currentTarget.value)}
                     />
                   </div>
                   <button
                     onClick={handleSearchClick}
                     className="border-t-2 border-r-2 border-b-2 rounded-r-full h-12 border-base-200 flex items-center justify-center p-2 bg-transparent hover:bg-base-200 transition"
                   >
                     <IoSearchOutline className="w-6 h-6 text-base-200" />
                   </button>
                 </div>
               </li>
               <div className="mt-6 flex justify-between items-center w-[260px]">
                 <li>
                   <p className="text-sm text-base-200">Choose your Unit:</p>
                 </li>
                 <button
                   type="submit"
                   className="flex items-center justify-center w-12 md:gap-4 h-12 rounded-full shrink-0 border-2 border-base-200 bg-base-200 hover:bg-base-300 transition"
                   onClick={handleUnitsChange}
                   name="metric"
                 >
                   <p className="text-xl">&deg;C</p>
                 </button>
                 <button
                   type="submit"
                   className="flex items-center justify-center w-12 md:gap-4 h-12 rounded-full shrink-0 border-2 border-base-200 bg-base-200 hover:bg-base-300 transition"
                   onClick={handleUnitsChange}
                   name="imperial"
                 >
                   <p className="text-xl">&deg;F</p>
                 </button>
               </div>
             </ul>
           </div>
         </div>
         <button
           type="submit"
           className="hidden lg:flex items-center justify-center w-12 md:gap-4 h-12 rounded-full shrink-0 border-2 border-base-200 bg-base-200 hover:bg-base-300 transition"
           onClick={handleUnitsChange}
           name="metric"
         >
           <p className="text-xl">&deg;C</p>
         </button>
         <button
           type="submit"
           className="hidden lg:flex items-center justify-center w-12 md:gap-4 h-12 rounded-full shrink-0 border-2 border-base-200 bg-base-200 hover:bg-base-300 transition"
           onClick={handleUnitsChange}
           name="imperial"
         >
           <p className="text-xl">&deg;F</p>
         </button>
         <button
           type="submit"
           className="flex items-center justify-center w-12 md:w-[202px] md:gap-4 h-12 rounded-full shrink-0 border-2 border-base-200 bg-base-200 hover:bg-base-300 transition"
           onClick={handleLocationClick}
         >
           <IoLocationOutline className="w-6 h-6" />
           <p className="hidden md:flex ">Current Location</p>
         </button>
       </div>
       <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
     </div>
   );
}

export default Navbar