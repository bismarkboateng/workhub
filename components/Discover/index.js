import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

import { Button, Discovercard } from ".."
import { discover } from "./discover-data"




export default function index() {
  return (
    <section className="w-[100%] 2xl:w-[65%] 2xl:mx-auto ml-[3.7%] md:ml-[0%] mx-auto discover-sm discover-sm-m
      discover-sm-1 discover-sm-2 discover-sm-4 md:mt-[45%] lg:mt-[15%]
      xl:mt-[11%] 2xl:mt-[5%] discover-sm-5">

        <div className="md:w-[95%] 2xl:w-[99%] 2xl:ml-0 md:ml-[2.3%] md:flex md:flex-row md:justify-between
          md:items-center">
            <h1 className="w-[90%] text-[31px] text-text-color font-Outfit font-semibold
              leading-[40.3px]">
              Discover Our Array of Services
            </h1>
            <Button className="hidden md:block cursor-pointer font-Outfit text-lg
                text-text-color-2 rounded w-[20%] 2xl:w-[15%] py-[10px]">
                View Services
            </Button>
        </div>

        <Swiper className="w-[95%] 2xl:w-[100%] mt-8 flex flex-row overflow-hidden"
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          slidesPerView={1.3}
          spaceBetween={8}
        >
          {discover.map((item) => (
            <SwiperSlide key={item.id} className="">
              <Discovercard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Button
          className="text-base font-Outfit text-text-color-2 leading-4 rounded
          py-[18px] px-5 w-[90%] mx-auto mt-4 md:hidden hide-btn"
        >
          View Services
        </Button>
    </section>
  )
}
