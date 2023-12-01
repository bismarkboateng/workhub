import Image from "next/image";

export default function index(props){

    function handleMouseOver(){

    }
    return (
        <>
            <div className="md:w-1/2 w-full flex cursor-pointer group">
                <div className="flex flex-col gap-y-10">
                    <div className="flex overflow-hidden rounded">
                        <Image className="rounded group-hover:scale-105 transition-all ease-in duration-300" alt="" src={props.image}></Image>
                    </div>
                    <div className="flex flex-col gap-y-3">
                        <div className="flex flex-row gap-x-5">
                            <p className="text-[#285FE2] font-Outfit text-sm">
                                {props.tag}
                            </p>
                            <p className="text-[#7E83AC] font-Outfit text-sm">
                                October 9,2023
                            </p>
                        </div>
                        <h1 className="text-xl lg:text-2xl font-bold font-Outfit text-[#242839] leading-normal pointer-events-none group-hover:text-[#285FE2]">
                            {props.title}
                        </h1>
                        <p className="text-[#7E83AC] font-Outfit lg:text-lg text-base">
                            {props.text}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}