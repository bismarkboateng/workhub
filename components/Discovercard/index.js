
export default function index({ item }) {
  return (
    <section className="border border-[#d6d8e9] md:w-[70%] 
        lg:w-[60%] xl:w-[50%] pt-[20px] px-[20px] h-[248px] rounded-md">
        <div className="flex flex-row items-center
            justify-between">
            <img
                src={item.icon}
                alt="people"
                className=""
            />
            <div className="border border-[#d6d8e9] py-1.5 px-2 flex flex-row items-center gap-2">
                <img
                  src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef11ee83e5f0a010238387_Person.svg"
                  alt="person"
                  className=""
                />
                <span className="text-[#7e83ac] font-Outfit text-[13px] leading-[16.9px]">
                    {item.numOfPeople}
                </span>
            </div>
        </div>

        <div className="text-xl font-Outfit text-text-color font-semibold 
        leading-[26px] cursor-pointer mt-2 mb-3">
            {item.title}
        </div>
        <p className="text-base font-Outfit text-[#53587a] leading-6 cursor-pointer mb-5">
            {item.description}
        </p>
        <div className="cursor-pointer text-[#285fe2] font-Outfit
        font-semibold text-base leading-[20.8px]">View Service</div>
    </section>
  )
}