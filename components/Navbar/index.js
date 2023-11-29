import { useState } from "react"
import Link from "next/link"
import { RxHamburgerMenu } from "react-icons/rx"
import { TfiClose } from "react-icons/tfi"

import { Navlinks } from ".."


export default function index() {
  const [onMobile, setOnMobile] = useState(false)
  
  const onCloseClickHandler = () => setOnMobile(prevOnMobile => !prevOnMobile)

  return (
   <nav className="bg-white">
      <section className="w-[89%] md:w-[95%] 2xl:w-[60%] mx-auto flex flex-row items-center
        justify-between py-4">
        <Link href="/">
          <img
            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef0fc29b13e1d137677484_Logo.svg"
            alt="logo"
            className="cursor-pointer"
          />
        </Link>

        <Navlinks
          onDesktopNavWrapper="hidden lg:flex lg:flex-row lg:items-center gap-20
          w-[75%] 2xl:w-[71%] lg:justify-between"
          onDesktopUlWrapper = "flex flex-row items-center gap-9"
        />

        <div className="lg:hidden">
          {onMobile ? (
              <TfiClose
                className="cursor-pointer"
                fontSize={23}
                onClick={onCloseClickHandler}
              />
            ): (
              <RxHamburgerMenu
                className="cursor-pointer"
                fontSize={23}
                onClick={onCloseClickHandler}
              />
            )}
        </div>
      </section>

      {onMobile && (
        <div
          className="bg-white lg:hidden"
          data-aos="fade-down"
        >
          <Navlinks
            mobileNavWrapper="w-[100%] flex flex-col gap-6 mt-10"
            mobileUlWrapper="flex flex-col gap-8 w-[89%] mx-auto"
            buttonStyle="w-[89%] mx-auto"
          />
        </div>
      )}

   </nav>
  )
}
