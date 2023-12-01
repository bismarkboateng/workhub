import { useState } from "react"
import { Coworking, Person } from "../../public/images"
import Button from "../Button"
import Image from "next/image"

export default function index(props){
    return (
        <>
            <div className="md:p-5 lg:w-1/3 md:w-1/2 w-full">
                <div className="group border flex flex-col p-5 rounded gap-y-5 cursor-pointer hover:-translate-y-1 transition-all duration-100 ease-in">
                    <div className="flex flex-col gap-y-3">
                        <div className="flex flex-row justify-between">
                            <Image alt="" src={props.image}></Image>
                            <div className="flex flex-row items-center justify-center gap-x-2 px-2 rounded border">
                                <Image alt="" src={Person}></Image>
                                <p className="text-[#53587A]">{props.range}</p>
                            </div>
                        </div>
                        <h3 id="title" className={`group-hover:text-[#285FE2] font-bold text-2xl font-Outfit text-[#242839] `}>
                            {props.title}
                        </h3>
                    </div>
                    <p className="text-lg font-Outfit text-[#53587A]">
                        {props.text}
                    </p>
                    <Button className={`cursor-pointer font-bold w-fit p-0 text-[#285FE2] bg-transparent font-Outfit rounded text-base leading-4 ${props.buttonStyle}`}>
                        View Service
                    </Button>
                </div>
            </div>
        </>
    )
}