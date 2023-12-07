
import { Button } from ".."

export default function index() {
  return (
    <section className="w-[90%] md:w-[95%] 2xl:w-[64%] pt-12 px-5 md:px-[32px] lg:pt-[20px] 2xl:pt-[10px] lg:px-[72px] pb-0 
      mt-20 md:mt-24 mb-5 mx-auto rounded-md bg-[#242839] flex flex-col md:flex-row md:items-start
      lg:items-center md:gap-5">
      <div className="flex flex-col items-start md:w-[40%] lg:w-[57%] md:mt-8 lg:mt-0">
        <h1 className="w-[100%] font-Outfit text-[31px] md:text-[35px] lg:text-[39px] text-text-color-2
          font-semibold leading-[40.3px] leading-[45.5px] text-center md:text-left">
          Ready to Transform Your Workspace?
        </h1>
        <p className="w-[95%] md:w-[100%] text-center md:text-left mt-2 lg:mt-3 mb-8 
        text-xl md:text-[23px] font-Outfit text-[#d6d8e9] leading-[26px]">
          Request a quote or schedule a tour today!
        </p>
        <Button
            className="text-text-color-2 text-center font-Outfit text-base  rounded
            py-[15px] w-[95%] lg:w-[30%]"
        >
            Enquire Now
        </Button>
      </div>

      <img
        src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef16c0417007f9e9c87934_CTA.png"
        className="w-[80%] mt-12 mx-auto md:w-[50%] lg:w-[43%] 2xl:w-[35%]"
        data-aos="fade-up"
        alt="desk"
      />
    </section>
  )
}
