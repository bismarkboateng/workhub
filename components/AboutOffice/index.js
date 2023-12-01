export default function index() {
  return (
    <div className="mt-16 pr-5 font-Outfit lg:flex lg:gap-20">
        <div className="mb-16">
            <h2 className="font-bold text-3xl text-[#242839] mb-5">
                About our Office Space
            </h2>
            <p className=" text-[#242839] text-lg font-normal ">Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin volutpat scelerisque ligula. Mauris rhoncus porta odio id rhoncus. Curabitur a nunc at nulla imperdiet aliquet.</p>
            <ul className="pl-7 mt-5">
                <li className="list-disc text-[#242839] font-normal text-lg pl-2">
                    Donec at lorem posuere, blandit nunc eu, vehicula lectus
                </li>
                <li className="list-disc text-[#242839] font-normal text-lg pl-2">
                    Phasellus vulputate aliquet ante sed luctus
                </li>
                <li className="list-disc text-[#242839] font-normal text-lg pl-2">
                    Pellentesque sit amet justo in neque condimentum mattis
                </li>
            </ul>
            <div className="mt-10">
                <h2 className="font-bold text-2xl text-[#242839] mb-5">
                    Is this solution right for me?
                </h2>
                <p className=" text-[#242839] text-lg font-normal mb-5">
                    Curabitur eu tortor id erat iaculis placerat. Quisque elementum ultricies metus, et semper nisi consectetur quis.
                </p>
                <p className=" text-[#242839] text-lg font-normal ">
                Sed lacinia, massa id porttitor ultrices, sem nisl scelerisque nunc, et condimentum nunc nisl ut arcu. Fusce semper mi pretium lacus viverra ornare vitae eget nibh.
                </p>
            </div>
           
        </div>
        <form action="" className="border px-5 lg:px-10 py-10 rounded-md">
            <div className="">
                <h3 className=" text-[#285FE2] text-2xl font-bold mb-3">Interested?</h3>
                <p className="text-[#242839] text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="">
                <div className="inline-block w-full mt-4">
                    <label htmlFor="name" className="block mb-2 text-[#7E83AC]">Name</label>
                    <input type="text"  placeholder="Name" id="name" className="border px-3 py-4 w-full rounded"/>
                </div>
                <div className="inline-block w-full mt-4">
                    <label htmlFor="email" className="block mb-2 text-[#7E83AC]">Email</label>
                    <input type="text"  placeholder="Email" id="email" className="border px-3 py-4 w-full rounded"/>
                </div>
                <div className="inline-block w-full mt-4">
                    <label htmlFor="phonenumber" className="block mb-2 text-[#7E83AC]">Phone Number</label>
                    <input type="tel" placeholder="Phone Number" id="phonenumber" className="border px-3 py-4 w-full rounded"/>
                </div>
                <button type="submit" className="w-full py-5 bg-[#285FE2] rounded-md text-[#F6F8FF] font-semibold mt-5">
                    Send Message
                </button>
            </div>
            
        </form>
    </div>
  )
}
