import { Navbar, Footer  } from "../components"
import { cards } from "../components/Locationcards"
import Image from 'next/image'
export default function Locations() {
  return (
   <div className="text-4xl font-semibold">
    <Navbar/>
    <div className="flex flex-col justify-center items-center text-4xl bg-gray-100 py-20 px-34 gap-y-8">
      <div className="font-bold">Our Locations</div>
      <div className="flex flex-col justify-center items-center text-xl text-gray-600">
      <div className="flex-col justify-center items-center md:justify-start md:items-start">
       In et lacus sit amet sapien faucibus consectetur.
      </div>
      <div className="flex justify-center items-center"> mollis, ac bibendum est gravida.</div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
  <button className="bg-blue-700 text-lg text-white py-2 px-4 rounded">Request a Quote</button>
  <button className="bg-white text-lg text-blue-950 border-blue-950 border-2 py-2 px-4 rounded">View Locations</button>
</div>
    </div>

{/* cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-20">
    {cards.map((card) => (
        <div key={card.id} className="rounded-xl border shadow-sm transform cursor:pointer hover:scale-105 transition-transform duration-200 max-w-[500px]">
          <Image src={card.url} alt={card.title} width={500} height={300} className="rounded-xl"/>
          <div className="p-4">
          <h2 className="text-2xl pb-8 transition-colors duration-200 hover:text-blue-700">{card.title}</h2>
          <p className="text-lg pb-12 text-gray-600">{card.paragraph}</p>
          <p className="text-blue-700 font-bold text-lg">Learn More</p>
          </div>
        </div>
      ))} 
</div>




   </div>
  )
}

