
import { 
  Footer, Navbar, Button,
  Vision, Quality,
} from "../components"

export default function About() {
  return (
    <section className="w-full bg-body-background">
      <Navbar />
      <section className="w-[90%] mx-auto mt-14">
        <h1 className="w-[97%] lg:w-[100%] mx-auto text-[39px] md:text-[44px] lg:text-[50px] font-Outfit 
        font-semibold leading-[50.7px] text-text-color text-center">
          WorkHub: Crafting Modern Workspaces
        </h1>
        <p className="mx-auto text-base md:text-lg text-[#53587a] font-Outfit leading-6
          text-center mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Praesent lobortis risus quam.
        </p>
        <div className="flex flex-col items-center mt-8 md:flex-row md:items-center
        md:justify-center md:gap-3">
          <Button
            className="font-Outfit text-base md:text-lg leading-4 py-[16px] mb-3
            md:mb-0 text-text-color-2 rounded cursor-pointer w-[100%] md:w-[20%]
            2xl:w-[10%]"
          > 
            Enquire Now
          </Button>
          <Button
            className="bg-transparent font-Outfit text-base md:text-lg leading-4 py-[16px]
            text-[#535885] border border-[#535885] rounded cursor-pointer w-[100%] md:w-[20%]
            2xl:w-[10%]"
          >
            Find Location
          </Button>
        </div>
      </section>

      <section className="w-full  md:w-[95%] 2xl:w-[64%] mx-auto flex gap-1 md:gap-2
       lg:gap-4 mt-10 md:mt-14 mb-14">
        <div className="w-[25vw] md:w-[40vw]">
          <img
            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef16a1aaf87ef2ed0216b4_About%20Hero%201.jpg"
            alt="image01"
            className="w-[100%] h-[100%] rounded object-cover"
          />
        </div>
        <div className="w-[50vw] md:w-[50vw] 2xl:h-[30vw]">
          <img
            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef16a10be439b5abe526d2_About%20Hero%203.jpg"
            alt="image02"
            className="w-[100%] h-[100%] rounded object-cover"
          />
        </div>
        <div className="w-[25vw] md:w-[40vw]">
          <img
            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef16a1242b2b3ed8594c3e_About%20Hero%202.jpg"
            alt="image03"
            className="w-[100%] h-[100%] rounded object-cover"
          />
        </div>
      </section>

      <section className="bg-[#f0f2fb] py-[52px] mb-14 xl:mt-24">
        <section className="w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto">
          <h2 className="w-[100%] lg:w-[80%] xl:w-[60%] text-[31px] md:text-[35px] lg:text-[39px] font-semibold 
          leading-[40.3px] font-Outfit text-text-color lg:mb-4">
            Our Story: Crafting the WorkHub Experience
          </h2>
          <div className="flex flex-col md:flex-row md:gap-10">
            <p className="font-Outfit text-text-color text-base md:text-lg leading-6 font-normal
              mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Maecenas purus arcu, rhoncus a pretium et, eleifend vitae erat. 
              Sed erat velit, aliquam nec varius quis, pellentesque id lorem.
              Proin in dui condimentum, condimentum nisl at, convallis nibh.
            </p>
            <p className="font-Outfit text-text-color text-base md:text-lg leading-6 font-normal
            mt-5">
              Ut congue, felis at varius euismod, sem dui vestibulum odio,
              ac facilisis ex risus tempor ipsum. In ac dolor tellus.
              Nunc tempus accumsan ornare. Pellentesque eget lorem hendrerit,
              ornare ligula vel, facilisis nisi.
            </p>
          </div>
        </section>
      </section>
      <Vision />
      <Quality />

      <section className="w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto mt-20
      bg-[#242839] py-[100px] md:py-[70px] lg:py-[80px] px-[24px] rounded-md flex flex-col items-center
      justify-center lg:mb-44">

        <h2 className="text-[31px] md:text-[35px] lg:text-[39px] md:mt-8 text-text-color-2 font-Outfit font-semibold
        leading-[40.3px] text-center lg:w-[50%]">
          Join the WorkHub Family: Embrace the Future of Work
        </h2>
        <p className="w-[85%] mt-5 mb-8 text-[#d6d8e9] font-Outfit text-base 
          md:text-lg leading-6 text-center">
          Request a quote or schedule a tour today!
        </p>
        <Button
          className="text-base md:text-lg text-text-color-2 font-Outfit py-[15px] px-[20px]
          text-center rounded cursor-pointer"
        >
          Enquire Now
        </Button>
      </section>
      <Footer />
    </section>
  )
}