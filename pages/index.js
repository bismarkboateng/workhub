import { 
  Navbar, Footer, Herosection,
  Discover, Locations, Scalable,
  Workspaces,
} from "../components"


export default function index() {
  return (
   <section className="bg-body-background">
    <Navbar />
    <Herosection />
    <Discover />
    <Locations />
    <Scalable />
    <Workspaces />
   </section>
  )
}
