import { 
  Navbar, Herosection,
  Discover, Locations, Scalable,
  Workspaces, Members, Companies,
  Transform, Posts, Footer
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
    <Members />
    <Companies />
    <Transform />
    <Posts />
    <Footer />
   </section>
  )
}