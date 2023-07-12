/* eslint-disable react/prop-types */
import React from 'react'
import { TbUvIndex } from "react-icons/tb";
import { IoInformation } from "react-icons/io5";
// import { WiStrongWind } from 'react-icons/wi';
// import AqiCardRow from './AqiCardRow';
// import AqiCardCol from './AqiCardCol';
import UviCardRow from './UviCardRow';

const AqiCard = ({weather: {uvi}}) =>
{
   let uviText;
   let uviSummary;
   let uviHelp = '';
   if (uvi < 3)
   {
      uviText = 'Low';    
      uviSummary = 'The UVI is low, no protection is required.';
      uviHelp = 'With a low UV Index from 0 to 2, there is hardly any risk of sunburn. But you should always use products with SPF to protect your skin. Not sure how to choose a sunscreen? Well, the sun protection factor (SPF) should be at least twice as high as the stated UV index. But this is just a general recommendation. You should always use products suitable for your skin type.';
   } else if
      (uvi < 5)
   {
      uviText = 'Medium'; 
      uviSummary = 'The UVI is medium, protection is required.';
      uviHelp = 'With a medium UV Index from 3 to 5, it’s recommended to wear protective clothing such as a T-shirt or blouse. Sunglasses and sun hats can also protect you from UV radiation. Additionally, you should protect your skin by applying sunscreen appropriate to your individual skin type. A sun protection factor should be chosen that is at least twice as high as the stated UV Index.';
   } else if
      (uvi < 7)
   {
      uviText = 'High'; 
      uviSummary = 'The UVI is high, protection is required.';
      uviHelp = 'This UV rating is climbing the UV Index scale, so it’s recommended adding a sunscreen suitable to your skin type too. The sun protection factor (SPF) should be at least twice as high as the stated UV index. So, for a ranking of 6 – 7, you need a factor of at least SPF 14 – but it’s also important to consider your individual skin type. So if you’re very fair-skinned, a higher SPF is a good idea. Make sure you don’t spend all day in direct sunlight – especially at around noon when the sun is at its highest. That’s the perfect time to hang out in the shade.';
   } else if
      (uvi < 10)
   {
      uviText = 'Very High';
      uviSummary = 'The UVI is very high, extra protection is required.';
      uviHelp = 'Well, this is considered a very high rating on the UV Index scale. It’s recommended that you stay in the shade or indoors between the hours of 11am and 3pm as the sun is at its strongest. Remember, even when staying in the shade, you should protect your skin by wearing long-sleeved and sun-proof clothing. Make sure to also cover up your legs, put on sunglasses with UV protection and wear a hat that also protects your delicate neck area. When it comes to sunscreen, make sure to use a type-appropriate sun protection with a very high sun protection factor.';
   } else if 
      (uvi === 11)
   {
      uviText = 'Extreme';
      uviSummary = 'The UVI is extremely high, extra protection is required.';
      uviHelp = 'When you ask ‘what is the uv index today?’ and find that it’s 11+,  you should avoid the sun during the lunch hours and stay indoors. When staying outside, make sure to stay in the shade as often as possible. This is the highest rating on the UV Index scale, so you should consider long trousers and long-sleeved, sun-proof clothing, sunglasses with proper UV protection and a headgear with neck protection. And even when staying in the shade, it is essential to use a sunscreen with a very high sun protection factor that is suitable for your skin type. ';
   } else  
   {
      uviText = 'Unknown';
      uviSummary = 'The UVI data is unavailable.';
      uviHelp = 'No data is available for this UV Index. Please try again later.';
   }

   return (
     <>
       <div className="flex justify-between items-start self-stretch">
         <h1 className="text-base font-semibold">Ultraviolet Index</h1>
         <div
           className={`
         py-[2px]
         px-3 W-[59px]
         h-[23px]
         text-white
         flex
         items-center
         ${uviText === "Low" ? "bg-[#1a8f09]" : ""}
         ${uviText === "Medium" ? "bg-[#deb70b]" : ""}
         ${uviText === "High" ? "bg-[#de740b]" : ""}
         ${uviText === "Very High" ? "bg-[#de0b0b]" : ""}
         ${uviText === "Extremely High" ? "bg-[#940bde]" : ""}
         rounded-full
         justify-center
         `}
         >
           {uviText}
         </div>
       </div>
       <div className="flex items-center gap-2 md:gap-6 lg:gap-12 md:flex-1 self-stretch">
         <div>
           <TbUvIndex className="w-8 md:w-10 lg:w-12 h-8 md:h-9 lg:h-12" />
         </div>
         <UviCardRow summary={uviSummary} uvi={uvi} />
         <div>
           <div>
             <button
               className="btn flex items-center justify-center w-12 h-12 rounded-full shrink-0 border-2 border-base-300 hover:bg-base-300 transition text-2xl"
               onClick={() => window.my_modal_3.showModal()}
             >
               ?
             </button>
             <dialog id="my_modal_3" className="modal">
               <form method="dialog" className="modal-box bg-base-300">
                 <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                   ✕
                 </button>
                 <h3 className="font-bold text-lg">
                   What does UV index mean at this level?
                 </h3>
                 <p className="py-4">
                   {uviText === "Low" ? uviHelp : ""}
                   {uviText === "Medium" ? uviHelp : ""}
                   {uviText === "High" ? uviHelp : ""}
                   {uviText === "Very High" ? uviHelp : ""}
                   {uviText === "Extremely High" ? uviHelp : ""}
                 </p>
               </form>
             </dialog>
           </div>
         </div>
         {/* <AqiCardCol />
            <AqiCardRow /> */}
       </div>
     </>
   );
}

export default AqiCard