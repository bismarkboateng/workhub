
export default function index() {
    const stats = [
        {number:"7+", desc: "Years in Operation", id: Math.random()},
        {number: "10+", desc: "Locations", id: Math.random()},
        {number: "100+", desc: "Event Hosted", id: Math.random()},
        {number: "600+", desc: "Community Members", id: Math.random()}
    ]
    return (
      <section className="w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto mt-14 lg:mt-20
        flex flex-col md:flex-row-reverse md:items-center md:gap-10 xl:gap-20">

        <div className="lg:w-[90%] xl:w-[60%]">
         <img
           src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef16a18069ffa2372685f4_About%201.jpg"
           alt="quality"
           className="rounded-md"
         />
        </div>

        <div className="mt-8 lg:w-[90%] 2xl:w-[80%]">
          <h2 className="text-[31px] md:text-[35px] text-text-color font-semibold 
            leading-[40.3px] md:w-[80%] font-Outfit">
            Commitment to Quality: Elevating Your Workspace
          </h2>
          <p className="text-base md:text-lg leading-6 font-Outfit text-text-color mt-3
            2xl:w-[70%]">
            Mauris maximus vehicula odio nec porta.
            Mauris congue nisi sed eros posuere, et dignissim mauris pharetra.
          </p>

          <ul className="grid grid-cols-2 mt-8 gap-y-8 md:gap-y-4 gap-x-8
          2xl:gap-x-5 2xl:gap-y-10">
            {stats.map(stat => (
              <li key={stat.id}>
                <p className="font-Outfit text-[39px] md:text-[44px] text-text-color-3
                  font-semibold leading-[50.7px]">
                  {stat.number}
                </p>
                <p className="w-[90%] font-Outfit text-base md:text-lg text-[#53587a] 
                  leading-[20.8px]">
                  {stat.desc}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }