import { Navbar, Footer  } from "../components"
export default function Locations() {
  return (
   <section className="text-4xl font-semibold">
    <Navbar/>
    <div className="flex flex-col justify-center items-center text-4xl bg-gray-100 py-20 px-34 gap-y-8">
      <div className="font-bold">Our Locations</div>
      <div className="flex-col">
      <div>In et lacus sit amet sapien faucibus consectetur. Aliquam finibus diam a elit</div>
      <div className="flex justify-center"> mollis, ac bibendum est gravida.</div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
  <button className="bg-blue-500 text-white py-2 px-4 rounded">Request a Quote</button>
  <button className="bg-white text-blue-950 border-blue-950 border-2 py-2 px-4 rounded">View Locations</button>
</div>


    </div>
   </section>
  )
}
