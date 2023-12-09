export default function index() {
  return (
    <div>      
        <section className="">
          <h1 className="font-bold  text-4xl text-[#242839]">Pinnacle Suites</h1>
          <p className="mt-4 text-[#53587A] font-normal mb-10">Fusce in aliquet ex, ut efficitur justo. Mauris sit amet feugiat ipsum.</p>
          <div className="flex flex-col gap-5">
            <img className="rounded-md"  
                src="https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64effc24d6539e7d1c81e84b_Location%201-p-800.jpg"
                alt=""
            />
            <div className="flex w-full gap-5">
                <img className="w-[47%] rounded-md" 
                    src="https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64effc273dfdd459d3508f0e_Location%202-p-500.jpg" alt="" />
                <img className="w-[47%] rounded-md" 
                    src="https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64effc273dfdd459d3508f0e_Location%202-p-500.jpg" alt="" />
            </div>
          </div>
        </section>      
    </div>
  )
}
