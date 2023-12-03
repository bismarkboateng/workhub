import { AboutPinnacle, Navbar, PinnacleSuitesHead } from "../components"

const pinnaclesuite = () => {
  return (
        <div className="font-Outfit">
          <Navbar />
            <section className="px-5 mt-10">
             <PinnacleSuitesHead />
             <AboutPinnacle />
            </section>      
        </div>
      )
  }
export default pinnaclesuite