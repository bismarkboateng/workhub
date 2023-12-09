import { AboutOffice, MoreServices, Navbar, Officecard, Footer } from "../components"


const officespace = () => {
  return (
    <div className="bg-body-background">
      <Navbar />
        <section className="w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto">
          <Officecard />
          <AboutOffice />
          <MoreServices />
        </section>   
      <Footer />   
    </div>
  )
}

export default officespace