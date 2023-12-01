import { AboutOffice, Navbar, Officecard } from "../components"


const officespace = () => {
  return (
    <div>
      <Navbar />
        <section className="pl-5">
          <Officecard />
          <AboutOffice />
        </section>      
    </div>
  )
}

export default officespace