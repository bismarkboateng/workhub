export default function index() {
  return (
    <div className="mt-10 lg:flex lg:flex-row-reverse justify-between">
        <img className="w-full lg:w-1/2 rounded-md"
         src="https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64f000b9f58b50b8daf85ee1_Office%20Space-p-800.jpeg"
         alt="an empty office" />
         <div className="pr-5 pt-5 font-Outfit">
            <h1 className="font-semibold  text-4xl text-[#242839]">Office Space</h1>
            <p className="mt-4">starting at only</p>
            <h3 className="text-2xl font-semibold  text-[#285FE2]">$500 per month</h3>
            <div className="bg-[#E6E8F5] w-full h-0.5 mt-6 mb-6"></div>
            <div className="text-black text-lg  font-base ">
                <h4 className="mb-3">Highlights</h4>
                <ul>
                    <li className="flex items-start gap-3 mb-3 text-base">
                        <img className="w-7 sm:w-5 lg:w-4 pt-2"
                            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef12176a0e0fe40b801dda_Check.svg" 
                        />
                        Vestibulum elit est, auctor non consequat non, interdum non eros.</li>
                    <li className="flex items-start gap-3 mb-3 text-base">
                        <img className="w-7 sm:w-5 lg:w-4 pt-2"
                            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef12176a0e0fe40b801dda_Check.svg" 
                        />
                        Proin quis quam ullamcorper, condimentum ipsum vel, suscipit libero.</li>
                    <li className="flex items-start gap-3 text-base">
                        <img className="w-7 sm:w-5 lg:w-4 pt-2"
                            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef12176a0e0fe40b801dda_Check.svg" 
                        />
                        Vivamus fermentum nibh erat, eu ornare arcu porttitor id.</li>
                </ul>
            </div>
            <div className="mt-5 gap-5">
                <button className="w-full sm:w-32 sm:mr-5 sm:py-4  py-5 bg-[#285FE2] rounded-md text-[#F6F8FF] font-semibold">
                    Enquire Now
                </button>
                <button className="mt-5 w-full sm:w-32 sm:py-4 py-5 bg-none border border-[#53587A] text-[#53587A] font-semibold rounded-md">
                    Find Location
                </button>
            </div>
         </div>
    </div>
  )
}
