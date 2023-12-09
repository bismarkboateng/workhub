import Image from 'next/image'

import { Navbar, Footer, Button  } from "../components"
import { cards } from "../components/Locationcards"



export default function Locations() {
  return (
   <div className="">
    <Navbar/>

    <div className="w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto flex flex-col justify-center items-center 
    bg-[#f0f2fb] py-20 px-34 gap-y-8">
      <div className="w-[80%] font-semibold font-Outfit text-text-color text-[39px] md:text-[44px]
       lg:text-[50px] text-center leading-[50.7px]">
        Our Locations
      </div>
      <div className="w-[90%] flex flex-col justify-center items-center font-Outfit 
      text-base md:text-lg text-[#53587a] leading-6 text-center">
        <div className="flex-col justify-center items-center md:justify-start md:items-start">
        In et lacus sit amet sapien faucibus consectetur.
        </div>
        <div className="flex justify-center items-center"> mollis, ac bibendum est gravida.</div>
      </div>
      <div className="w-[90%] flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      md:justify-center">
        <Button
          className="text-text-color-2 md:text-lg rounded py-[15px] w-[100%] md:w-[30%] font-Outfit px-[23px]
          lg:w-[23%] 2xl:w-[18%] cursor-pointer outline-none"
        >
          Request a Quote
        </Button>
        <Button
          className="font-Outfit text-base md:text-lg text-[#53587a] md:w-[30%] border border-[#53587a]
          lg:w-[23%] 2xl:w-[18%]  bg-transparent outline-none py-[15px] rounded cursor-pointer"
        >
          View Locations
        </Button>
      </div>
    </div>

    {/* cards */}
    <div className="w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
      mt-20">
      {cards.map((card) => (
        <div key={card.id} className="rounded-xl border shadow-sm transform cursor:pointer 
          hover:scale-105 transition-transform duration-200 max-w-[500px]">
          <Image src={card.url} alt={card.title} width={500} height={300} className=""/>
          <div className="p-4">
            <h2 className="text-xl md:text-[23px] font-Outfit text-text-color font-semibold leading-[26px]
            transition-colors duration-200 hover:text-blue-700 mb-3">
              {card.title}
            </h2>
            <p className="text-base md:text-lg font-Outfit text-[#53587a] mb-3 leading-6">
              {card.paragraph}
            </p>
            <p className="text-base md:text-lg font-Outfit text-text-color-3 font-semibold
            leading-[20.8px] mb-3">
              Learn More
            </p>
          </div>
        </div>
      ))} 
    </div>
    <Footer />
  </div>
  )
}

