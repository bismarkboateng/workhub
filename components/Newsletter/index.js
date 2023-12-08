import { FaFacebookF } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { FaYoutube } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"
import { FaLinkedinIn } from "react-icons/fa6"


import { Button } from ".."

export default function index() {
  const socialStyles = "text-gray-400 text-[20px] font-Outift"
  return (
    <section className="w-[100%] md:w-[50%]">
        <div className="w-[94%] font-Outfit text-xl md:text-[23px] font-semibold text-text-color
        leading-[26px]">
            Subscribe to our Newsletter
        </div>
        <p className="font-Outfit text-[#53587a] text-base md:text-lg leading-6 mt-5">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Etiam efficitur sodales dolor.
        </p>

        <div className="flex flex-col gap-4 mt-8
        md:flex-row md:gap-6">
            <input
                placeholder="Your Email"
                className="bg-[#f6f8ff] py-3 px-4 border border-[#d6d8e9] rounded
                outline-none"
            />
            <Button
              className="text-text-color-2 py-[12px] px-[20px] rounded outline-none
              font-Outfit text-base md:text-lg"
            >
                Subscribe
            </Button>
        </div>

        <div className="flex flex-row gap-5 items-center mt-8">
            <FaFacebookF className={socialStyles} />
            <RiInstagramFill className={socialStyles} />
            <FaYoutube className={socialStyles} />
            <BsTwitterX className={socialStyles} />
            <FaLinkedinIn className={socialStyles} />
        </div>
    
    </section>
  )
}
