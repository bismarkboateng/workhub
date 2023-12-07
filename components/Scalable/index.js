import { TiTick } from "react-icons/ti"


export default function index() {
  return (
    <section className="w-[89%] md:w-[95%] 2xl:w-[64%] mt-40 mx-auto
        flex flex-col md:flex-row-reverse md:gap-10 lg:gap-44 lg:items-center">
        <section className="w-[85%] mx-auto md:w-[50%]">
            <img
                src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef16cb7c6fdabad6cc93f4_Feature%201-p-800.png"
                alt="scalable"
                className="object-cover"
            />
        </section>

        <section className="mt-8 md:w-[50%]">
            <h2 className="text-[31px] md:text-[35px] lg:text-[39px] text-text-color font-Outfit
                font-semibold leading-10">
                Scalable Vision: Your Future-Ready Workspace
            </h2>

            <div className="flex flex-row gap-3 mt-4 2xl:mt-12">
                <i><TiTick className="text-text-color-3 text-2xl" /></i>
                <p className="text-text-color font-Outfit text-base md:text-lg leading-6">
                    Morbi vitae ex quis lectus volutpat cursus vitae a elit
                </p>
            </div>

            <div className="flex flex-row gap-3 mt-3">
                <i><TiTick className="text-text-color-3 text-2xl" /></i>
                <p className="text-text-color font-Outfit text-base md:text-lg leading-6">
                    Donec magna turpis, pharetra non facilisis sit amet, he drerit vel dolor.
                </p>
            </div>
            <p className="text-base md:text-lg font-Outfit text-text-color-3 font-semibold
             leading-5 mt-7 2xl:mt-12 cursor-pointer">
                Request a Quote
            </p>
        </section>
    </section>
  )
}
