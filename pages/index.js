import { 
  Navbar, Footer, Herosection,
  Discover, Locations, Scalable,
  Workspaces, Members
} from "../components"


export default function index() {
  return (
   <section className="w-[100%] bg-body-background">
    <Navbar />
    <Herosection />
    <Discover />
    <Locations />
    <Scalable />
    <Workspaces />
    <Members />
   </section>
  )
}
