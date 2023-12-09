import { AboutPinnacle, MoreLocations, Navbar, PinnacleSuitesHead, Footer} from "../components"

const pinnaclesuite = () => {
  return (
        <div className="font-Outfit">
          <Navbar />
            <section className="w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto mt-10">
              <div className="lg:flex lg:gap-4">
                <div className="">
                  <PinnacleSuitesHead />
                  <AboutPinnacle />
                </div>
                <div className="mt-10 sticky top-0 h-max">
                  <form action="" className="border px-5 lg:px-10 py-10 rounded-md">
                      <div className="">
                          <h3 className=" text-[#285FE2] text-2xl font-bold mb-3">Interested?</h3>
                          <p className="text-[#242839] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                      </div>
                      <div className="">
                          <div className="inline-block w-full mt-4">
                              <label htmlFor="name" className="block mb-2 text-[#7E83AC]">Name</label>
                              <input type="text"  placeholder="Name" id="name" className="outline-none border px-3 py-4 w-full rounded"/>
                          </div>
                          <div className="inline-block w-full mt-4">
                              <label htmlFor="email" className="block mb-2 text-[#7E83AC]">Email</label>
                              <input type="text"  placeholder="Email" id="email" className="outline-none border px-3 py-4 w-full rounded"/>
                          </div>
                          <div className="inline-block w-full mt-4">
                              <label htmlFor="phonenumber" className="block mb-2 text-[#7E83AC]">Phone Number</label>
                              <input type="tel" placeholder="Phone Number" id="phonenumber" className="outline-none border px-3 py-4 w-full rounded"/>
                          </div>
                          <button type="submit" className="w-full py-5 bg-[#285FE2] rounded-md text-[#F6F8FF] font-semibold mt-5">
                              Send Message
                          </button>
                      </div>
                    </form>
                </div>
              </div>
              <MoreLocations />
            </section>     
            <Footer /> 
        </div>
      )
  }
export default pinnaclesuite