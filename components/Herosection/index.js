import { Button } from ".."


export default function index() {
  return (
    <section className="relative 2xl:w-[64%] mx-auto md:mt-10">
        <div className="w-full md:w-[95%] lg:w-[80%] 2xl:w-[67%] md:ml-[2.2%] 
            lg:ml-[17.5%] 2xl:ml-[33%] h-[280px] md:h-[400px] lg:h-[550px]">
            <img
                src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64f9ddeddb3fa9b08df23a8f_Hero-p-800.jpg"
                alt="work place"
                className="object-cover w-full h-full
                md:rounded lg:rounded-md"
            />
        </div>

        <div className="w-[89%] lg:w-[55%] xl:w-[50%] absolute top-[86%] lg:top-[10%]
            left-[5%] z-[3] lg:left-[2%] 2xl:left-0 bg-white py-8 lg:py-[64px] px-5 lg:px-[48px]
            shadow-card rounded-md"
            data-aos="fade-up"
        >
            <div>
                <h1 className="text-[39px] md:text-[44px] lg:text-[50px] w-[95%] lg:w-[100%] mx-auto
                    text-text-color font-Outfit font-semibold leading-[50.7px] lg:leading-[65px] 
                    text-center lg:text-left mb-3">
                    Curate your office space with <span className="text-[#285fe2]">WorkHub</span>
                </h1>
                <p className="w-[80%] lg:w-[95%] text-[#53587a] text-xl md:text-[23px] lg:text-[23px] font-Outfit 
                leading-[30px] text-center lg:text-left mb-7 ml-5 lg:ml-0">
                    Empowering professionals with onnovative workspaces
                </p>
                <div className="flex flex-col md:flex-row w-[100%] md:w-[48%] lg:w-[60%]
                    mx-auto lg:mx-0 gap-4">
                    <Button
                    className="cursor-pointer font-Outfit rounded text-base
                    text-text-color-2 leading-4 py-[18px] px-5 "
                    >
                        Get a Quote
                    </Button>
                    
                    <Button
                        className="bg-white text-[#53587a] font-Outfit text-base leading-4
                        cursor-pointer py-[18px] px-5 border border-[#53587a] md:mt-0 outline-none
                        rounded"
                    >
                        Our Services
                    </Button>
                </div>
                
            </div>
        </div>
    </section>
  )
}
