import { Discovercard } from "..";

export default function index() {
    const moreServices = [
        {
            icon: "https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64f00100ae5329c81e5a2b37_Coworking.svg",
            numOfPeople: "1",
            title: "Coworking Space",
            description: " Maecenas at feugiat elit. Aliquam ac tortor a nisl tempus venenatis sed.",       
            id: Math.random(),
        },
        {
            icon: "https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64f000f8765d8fd565f8a3a8_Dedicated%20Desk.svg",
            numOfPeople: "1",
            title: "Dedicated Desk",
            description: "Nullam nec justo eu elit ornare eleifend. Etiam consectetur quam at ante.",       
            id: Math.random(),
        },
        {
            icon: "https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64f000e4f50c9e714410e6d0_Virtual%20Office.svg",
            numOfPeople: "1",
            title: "Virtual Office",
            description: "Nam non ante in nunc convallis tempus. Integer scelerisque urna in ex.",       
            id: Math.random(),
        }
    ]
  return (
    <div className="font-Outfit pr-5 w-full mt-10">
        <div className="sm:flex items-center justify-between">
            <h1 className="font-semibold  text-4xl text-[#242839]">
                More Services
            </h1>
            <button className="mt-5 px-5 text-center border border-[#53587A] rounded font-medium text-[#53578A] py-5 hidden sm:block">
                View All Services
            </button>
        </div>
        <div className="flex flex-col md:flex-row gap-5 mt-5">
            {moreServices.map((item) => (
                <Discovercard item={item} />
            ))}
        </div>
        <button className="mt-5 w-full text-center border border-[#53587A] rounded font-medium text-[#53578A] py-5 sm:hidden">
            View All Services
        </button>
    </div>
  )
}
