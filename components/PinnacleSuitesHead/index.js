export default function index() {
  return (
    <div>      
        <section className="">
          <h1 className="font-semibold font-Outfit text-[39px] leading-[50.7px] text-[#242839]">Pinnacle Suites</h1>
          <p className="mt-4 text-[#53587A] font-normal mb-10">Fusce in aliquet ex, ut efficitur justo. Mauris sit amet feugiat ipsum.</p>
          <div className="w-[100%] flex flex-col gap-2 md:flex-row md:gap-5">
            <img 
                src="https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64effc24d6539e7d1c81e84b_Location%201-p-800.jpg"
                alt=""
                className="rounded-md md:w-[66%]"
            />
            <div className="flex md:flex-col justify-between md:w-[44%]
              md:gap-5">
              <img className="w-[47%] md:w-[100%] rounded-md" 
                  src="https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64effc273dfdd459d3508f0e_Location%202-p-500.jpg" alt="" />
              <img className="w-[47%] md:w-[100%] rounded-md" 
                  src="https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64effc273dfdd459d3508f0e_Location%202-p-500.jpg" alt="" />
            </div>
          </div>
        </section>      
    </div>
  )
}
