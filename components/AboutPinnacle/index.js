export default function index() {
  return (
    <div>      
        <section className="mt-14">
          <h1 className="font-semibold  text-3xl text-[#242839]">About Pinnacle Suites</h1>
          <p className="mt-4 text-[#53587A] font-normal mb-5">Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin volutpat scelerisque ligula. Mauris rhoncus porta odio id rhoncus. Curabitur a nunc at nulla imperdiet aliquet.</p>
          <ul className="ml-7 text-[#53587A] font-normal">
            <li className="list-disc pl-3 mb-3">
              Donnec at lorem posuere, blansit nunc eu, vehicula lectus
            </li>
            <li className="list-disc pl-3 mb-3">
            Phasellus vulputate aliquet ante sed luctus
            </li>
            <li className="list-disc pl-3">
              Pellentesque sit amet justo in neque condimentum mattis
            </li>
          </ul>
            <h1 className="font-semibold  text-3xl text-[#232738]">Why this Location?</h1>
            <p className="mt-4 text-[#53587A] font-normal mb-5">Curabitur eu tortor id erat iaculis placerat. Quisque elementum ultricies metus, et semper nisi consectetur quis.</p>
            <p className="mt-7 text-[#53587A] font-normal mb-5">Sed lacinia, massa id porttitor ultrices, sem nisl scelerisque nunc, et condimentum nunc nisl ut arcu. Fusce semper mi pretium lacus viverra ornare vitae eget nibh.</p>
            <div className="mb-10 mt-16 py-10 border-[#D6D8E9] border-y-2">
              <h1 className="font-semibold text-3xl text-[#242839]">Available Amenities</h1>
              <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 gap-4 ">
                <div className="flex items-center gap-3">
                  <img src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef11fecf74c28035ca5885_Parking.svg" alt="" />
                  <p className="text-[#242839] font-medium">Parking</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef11fd85e25dda1a6eb61f_Wifi.svg" alt="" />
                  <p className="text-[#242839] font-medium">Wifi</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef11fda5b4c599767359ef_Printer.svg" alt="" />
                  <p className="text-[#242839] font-medium">Printer</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef11fd717532eb461db60b_EV%20Charger.svg" alt="" />
                  <p className="text-[#242839] font-medium">EV Charger</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef11fd5c1700c1889791bc_Coffee.svg" alt="" />
                  <p className="text-[#242839] font-medium">Coffee Bar</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef11fd0655719ad6af4b04_Board%20Game.svg" alt="" />
                  <p className="text-[#242839] font-medium">Board Game</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef11fe45b217c3c315f333_Camera.svg" alt="" />
                  <p className="text-[#242839] font-medium">Security Camera</p>
                </div>
                <div className="flex items-center gap-3">
                  <img src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef11fd95e54b902952e3e8_Cleaning.svg" alt="" />
                  <p className="text-[#242839] font-medium">Cleaning Service</p>
                </div>
              </div>
            </div>
            <div className="">
            <h1 className="font-semibold text-3xl text-[#242839]">Location</h1>
            <div className="mt-5">
              <div className="flex justify-between gap-8">
                <div className="grow w-5/12">
                  <h4 className="font-semibold text-lg text-[#242839]">Address</h4>
                  <p>123 Main Street, Suite 101, Primeville, PV 12345</p>
                </div>
                <div className="grow w-5/12">
                  <h4 className="font-semibold text-lg text-[#242839]">Tel</h4>
                  <p>(123) 456-7891</p>
                </div>
              </div>
              <div className="mt-5">
                  <h4 className="font-semibold text-lg text-[#242839]">Operating hours</h4>
                  <p>Weekdays - 07:00 - 22:00 </p>
                  <p>Weekends - 09:00 - 19:00 </p>
              </div>
            </div>
            </div>
        </section>      
    </div>
  )
}
