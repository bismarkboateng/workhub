import { TiTick } from "react-icons/ti"


export default function index() {
  return (
    <section className="w-[89%] md:w-[95%] 2xl:w-[64%] mt-12 mx-auto
        flex flex-col md:flex-row md:gap-12 lg:gap-44 lg:items-center">
        <section className="w-[85%] mx-auto md:w-[50%]">
            <img
                src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef16cb8069ffa23726b907_Feature%202-p-800.png"
                alt="workspaces"
                className="object-cover"
            />
        </section>

        <section className="mt-8 md:w-[50%]">
            <h2 className="text-[31px] md:text-[35px] lg:text-[39px] text-text-color font-Outfit
                font-semibold leading-10">
                Discover the Flexibility of Our Workspaces
            </h2>

            <div className="flex flex-row gap-3 mt-4 2xl:mt-12">
                <i><TiTick className="text-text-color-3 text-2xl" /></i>
                <p className="text-text-color font-Outfit text-base md:text-lg leading-6">
                    Mauris vel congue metus, dictum pharetra metus.
                </p>
            </div>

            <div className="flex flex-row gap-3 mt-3">
                <i><TiTick className="text-text-color-3 text-2xl" /></i>
                <p className="text-text-color font-Outfit text-base md:text-lg leading-6">
                    Cras massa dolor, ultricies quis turpis sit amet, vehicula auctor lectus.
                </p>
            </div>
            <p className="text-base md:text-lg font-Outfit text-text-color-3 font-semibold
             leading-5 mt-7 2xl:mt-12 cursor-pointer">
                View Our Services
            </p>
        </section>
    </section>
  )
}
