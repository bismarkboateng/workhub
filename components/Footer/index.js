import Link from "next/link"

import { Newsletter } from ".."
import { pagesLinks, utilityLinks } from "./footer-data"


export default function index() {
  return (
    <section className="w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto mt-20 2xl:mt-32">
        <div className="flex flex-col lg:flex-row lg:gap-14
        xl:justify-between">
          <Newsletter />
          <section className="grid md:grid-cols-2">
            <div className="mt-14 lg:mt-0 lg:mr-6">
              <div className="font-Outfit text-text-color font-semibold
              text-base md:text-lg leading-[20.8px]">
                Pages
              </div>
              <ul className="mt-3">
                {pagesLinks.map(link => (
                
                <li key={link.id} className="text-text-color font-Outfit text-base md:text-lg
                leading-[20.8px] mt-3 cursor-pointer">
                  <Link href={link.link}>
                    {link.name}
                  </Link>
                </li>))}
              </ul>
            </div>

            <div className="mt-14 lg:mt-0">
              <div className="font-Outfit text-text-color font-semibold
              text-base md:text-lg leading-[20.8px]">
                Utility
              </div>
              <ul className="mt-3">
                {utilityLinks.map(link => (
                <li key={link.id} className="text-text-color font-Outfit text-base md:text-lg
                leading-[20.8px] mt-3 cursor-pointer">
                  {link.name}
                </li>))}
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-14 pt-14 border-t border-[#e6e8f5] mb-5
        flex flex-col md:flex-row md:justify-between md:items-center
        ">
          <img
           src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef0fc29b13e1d137677484_Logo.svg"
           alt="workhub logo"
           className="w-[120px]"
          />  
          <div className="font-Outfit text-text-color text-base md:text-lg
          leading-[20.8px] mt-5">
            Built by <span className="text-text-color-3">biscode</span>{" "}
            Powered by <span className="text-text-color-3">React</span>
          </div>      
        </div>
    </section>
  )
}
