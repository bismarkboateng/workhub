import { AboutOffice, MoreServices, Navbar, Officecard } from "../components"


const officespace = () => {
  return (
    <div>
      <Navbar />
        <section className="pl-5">
          <Officecard />
          <AboutOffice />
          <MoreServices />
        </section>      
    </div>
  )
}

export default officespace