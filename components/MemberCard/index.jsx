
export default function index({ member }) {
  return (
    <section className="w-[100%]">
        <p className="text-xl md:text-[23px] font-Outfit text-text-color-2 leading-[30px]">
            {member.description}
        </p>

        <div className="flex flex-row items-center gap-5 mt-8">
            <img
                src={member.image}
                alt="person"
                className="w-[80px] rounded-full"
            />
            <div className="flex flex-col font-Outfit text-base md:text-lg font-Outfit">
                <strong className="text-text-color-2 font-bold x">
                    {member.name}
                </strong>
                <strong className="text-[#7e83ac] font-normal
                    mt-1">
                    {member.profession}
                </strong>
            </div>
        </div>
    </section>
  )
}
