const index = () => {
  return (
    <div>
        <img className="w-full rounded-md"
         src="https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64f000b9f58b50b8daf85ee1_Office%20Space-p-800.jpeg"
         alt="an empty office" />
         <div className="pr-5 pt-5 font-Outfit">
            <h1 className="font-semibold  text-4xl text-[#242839]">Office Space</h1>
            <p className="mt-4">starting at only</p>
            <h3 className="text-2xl font-semibold  text-[#285FE2]">$500 per month</h3>
            <div className="bg-[#E6E8F5] w-full h-0.5 mt-6 mb-6"></div>
            <div className="text-black text-lg  font-base ">
                <h4>Highlights</h4>
                <ul> 
                    <li>Vestibulum elit est, auctor non consequat non, interdum non eros.</li>
                    <li>Proin quis quam ullamcorper, condimentum ipsum vel, suscipit libero.</li>
                    <li>Vivamus fermentum nibh erat, eu ornare arcu porttitor id.</li>
                </ul>
            </div>
         </div>
    </div>
  )
}

export default index