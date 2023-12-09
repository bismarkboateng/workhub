import Image from "next/image";
import { Cat } from "../../public/images";

export default function index(){
    return (
        <>
            <section className="flex flex-row relative w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto mt-10">
                <div className="bg-[#e6e8f5] p-2 lg:h-full lg:w-1/2 w-full absolute top-0 right-0 z-0 h-[80%]"></div>
                <div className="flex lg:flex-row flex-col gap-x-10 gap-y-5 w-full z-10">
                    <div className="flex lg:w-3/5 order-2">
                        <Image className="rounded" src={Cat} alt=""></Image>
                    </div>
                    <div className="flex flex-col gap-y-5 lg:w-2/5 w-full justify-center order-1">
                        <div className="flex flex-row gap-x-5">
                            <p className="text-[#285FE2] font-Outfit text-lg">
                                Workplace
                            </p>
                            <p className="text-[#7E83AC] font-Outfit text-lg">
                                October 9,2023
                            </p>
                        </div>
                        <h1 className="lg:text-5xl text-4xl font-bold font-Outfit text-[#242839] leading-normal">
                            Creating a Distraction Free-Workspace
                        </h1>
                        <p className="text-[#7E83AC] font-Outfit text-lg">
                            Cras pulvinar facilisis sodales. In hac habitasse platea dictumst. Suspendisse mauris lacus, dapibus ut.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}