import React from 'react'
import { cards } from './CardsData'

export default function index() {
  return (
    <div className='mt-10 mb-10'>
      <div className="sm:flex items-center justify-between">
          <h1 className="font-semibold  text-4xl text-[#242839]">
              More Locations
          </h1>
          <button className="mt-5 px-6 text-center border border-[#53587A] rounded font-medium text-[#53578A] py-4 hidden sm:block">
              View Locations
          </button>
      </div>
      <div className="mt-10 ">
        <div className=" grid md:grid-flow-col md:grid-rows-2 lg:grid-rows-1 gap-5">
          {cards.map((card) => (
            <div key={card.id} className=" max-w-xl border rounded-md pb-5 box-border space-y-4 flex-col justify-center group">
              <div class="max-w-full overflow-hidden">
                <img src={card.url} className='w-full rounded-md object-cover overflow-hidden shadow-lg transform transition-transform duration-300 ease-in-out group-hover:scale-110 max-w-full ' alt={card.title} />
              </div>
              <div className="mt-5 px-4">
                <h3 className="font-semibold  text-xl text-[#242839] group-hover:text-[#285FE2] transform transition-transform duration-300 ease-in-out mb-2">{card.title}</h3>
                <p className="font-normal  text-base text-[#53587A] mb-5">{card.paragraph}</p>
                <p className="font-semibold  text-base text-[#285FE2]">Learn More</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
      <button className="mt-5 w-full px-6 text-center border border-[#53587A] rounded font-medium text-[#53578A] py-4 sm:hidden">
              View Locations
      </button>
      </div>
    </div>
  )
}

