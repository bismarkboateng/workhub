import { useState } from "react"

import { Button } from ".."

const initialState = {
  pinnacle: true,
  cityscape: false,
  metropolitan: false,
}

export default function index() {
  const [isClicked, setIsClicked] = useState(initialState)

  const handleClick = (clicked) => {
    setIsClicked({...initialState, pinnacle: false, [clicked]: true })
  }

  const locIcon = "https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef1218f112480bc544a9f2_Location.svg"
  const textStyle = "text-xl 2xl:text-[23px] font-Outfit text-[#222] font-semibold leading-[26px]"
  return (
    <section className="w-[89%] md:w-[95%] 2xl:w-[64%] mx-auto mt-20 mb-10">
        <section className="mb-10 flex flex-row justify-between items-center">
          <h2 className="text-[31px] md:text-[35px] font-Outfit text-text-color font-semibold
            leading-10">
            Explore Our Locations
          </h2>
          <Button
            className="hidden md:block font-Outfit text-lg text-text-color-2
            leading-4 rounded py-[18px] px-[15px] cursor-pointer"
          >
            View Locations
          </Button>
        </section>

        <section className="flex flex-col lg:flex-row lg:gap-20 2xl:gap-28
          xl:items-center">
          <div
            className="relative w-[90%] lg:w-[40%] xl:w-[50%] h-[30vh] md:h-[45vh] lg:h-[60vh] 
            2xl:h-[50vh] max-w-[600px] max-h-[600px] bg-[#0a3a8f] rounded-md"
          >
            {isClicked.pinnacle && (
                <img
                  src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64f2860b53b00eafd0381b30_Location%201-p-500.jpg"
                  alt="location"
                  className="absolute w-[100%] h-[85%] top-4 md:top-8 bottom-4 md:bottom-5
                  left-3 md:left-8 object-cover rounded-md"
                />
            )}
            {isClicked.cityscape && (
                <img
                  src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64f9dc76cf72888f104b0864_Location%205-p-1080.jpg"
                  alt="location"
                  className="absolute w-[100%] h-[85%] top-4 md:top-8 bottom-4 md:bottom-5
                  left-3 md:left-8 object-cover rounded-md"
                />
            )}
            {isClicked.metropolitan && (
                <img
                  src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64f2860b4ae531679c6ed7dd_Location%207-p-800.jpg"
                  alt="location"
                  className="absolute w-[100%] h-[85%] top-4 md:top-8 bottom-4 md:bottom-5
                  left-3 md:left-8 object-cover rounded-md"
                />
            )}
          </div>

          <div className="mt-10 lg:mt-0 lg:w-[50%]">
            <div
              onClick={() => handleClick("pinnacle")}
              className={`flex flex-row gap-3 items-start 
              pb-10 cursor-pointer border-b border-[#e6e8f5]
              ${isClicked.pinnacle && 'rounded-md bg-white shadow-card p-5'}`}>
              <img
                src={locIcon}
                alt="location icon"
                className={`w-[20px] ${isClicked.pinnacle && 'mb-2'}`}
              />
              <div className="flex flex-col">
                <p className={`${textStyle} ${isClicked.pinnacle && 'text-text-color-3'}`}>
                  Pinnacle Suites
                </p>
                {isClicked.pinnacle && (
                  <p className="text-[#53587a] font-Outfit">
                    Fusce in aliquet ex, ut efficitur justo. Mauris sit amet feugiat ipsum.
                  </p>
                )}
              </div>
            </div>

            <div
              onClick={() => handleClick("cityscape")}
              className={`flex flex-row gap-3 items-start 
              pb-10 cursor-pointer border-b mt-10 border-[#e6e8f5]
              ${isClicked.cityscape && 'rounded-md bg-white shadow-card p-5'}`}>
              <img
                src={locIcon}
                alt="location icon"
                className="w-[20px]"
              />
              <div className="flex flex-col">
                <p className={`${textStyle} ${isClicked.cityscape && 'text-text-color-3'}`}>
                  Cityscape Heights
                </p>
                {isClicked.cityscape && (
                  <p className="text-[#53587a] font-Outfit">
                    Fusce in aliquet ex, ut efficitur justo. Mauris sit amet feugiat ipsum.
                  </p>
                )}
              </div>
            </div>
          
            <div
              onClick={() => handleClick("metropolitan")}
              className={`flex flex-row gap-3 items-start 
              pb-10 cursor-pointer border-b mt-10 border-[#e6e8f5]
              ${isClicked.metropolitan && 'rounded-md bg-white shadow-card p-5'}`}>
              <img
                src={locIcon}
                alt="location icon"
                className="w-[20px]"
              />
              <div className="flex flex-col">
                <p className={`${textStyle} ${isClicked.metropolitan && 'text-text-color-3'}`}>
                  Metropolitan Oasis
                </p>
                {isClicked.metropolitan && (
                  <p className="text-[#53587a] font-Outfit">
                    Fusce in aliquet ex, ut efficitur justo. Mauris sit amet feugiat ipsum.
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        <Button
          className="mt-10 font-Outfit text-base text-text-color-2
          w-[100%] leading-4 rounded py-[18px] cursor-pointer md:hidden"
        >
          View Locations
        </Button>
    </section>
  )
}


// border-b border-[#e6e8f5] mt-10