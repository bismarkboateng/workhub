import { 
  Navbar, Footer, Herosection,
  Discover
} from "../components"


export default function index() {
  return (
   <section className="bg-body-background">
    <Navbar />
    <Herosection />
    <Discover />
   </section>
  )
}
