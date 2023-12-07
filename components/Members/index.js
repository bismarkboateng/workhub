import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"

import "swiper/css"
import "swiper/css/pagination"

import { MemberCard } from ".."
import { members } from "./members-data"

export default function index() {
  return (
    <section className="w-[100%] mt-20 bg-[#242839] py-[78px] md:py-[126px] lg:py-[150px] px-0">
     <div className="flex flex-row justify-center items-center">
        <h2 className="w-[89%] text-[31px] md:text-[35px] lg:text-[39px]
        font-Outfit text-text-color-2 font-semibold leading-10 text-center mb-10">
          What our Members Say
        </h2>
     </div>

    <Swiper 
        pagination={{
            dynamicBullets: true,
            clickable: true,
        }}
        modules={[Pagination]}
        slidesPerView={1}
        className="w-[89%] md:w-[95%] lg:w-[80%] xl:w-[65%]
        2xl:w-[43%] mx-auto overflow-hidden flex flex-row"
    >

        {members.map(member => (
            <SwiperSlide key={member.id}>
                <MemberCard member={member} />
            </SwiperSlide>
        ))}
    </Swiper>

    </section>
  )
}
