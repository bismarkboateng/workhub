import { InterestedForm } from "..";

export default function index() {
  return (
    <div className="mt-16 pr-5 font-Outfit lg:flex lg:gap-20">
        <div className="mb-16">
            <h2 className="font-bold text-3xl text-[#242839] mb-5">
                About our Office Space
            </h2>
            <p className=" text-[#242839] text-lg font-normal ">Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin volutpat scelerisque ligula. Mauris rhoncus porta odio id rhoncus. Curabitur a nunc at nulla imperdiet aliquet.</p>
            <ul className="pl-7 mt-5">
                <li className="list-disc text-[#242839] font-normal text-lg pl-2">
                    Donec at lorem posuere, blandit nunc eu, vehicula lectus
                </li>
                <li className="list-disc text-[#242839] font-normal text-lg pl-2">
                    Phasellus vulputate aliquet ante sed luctus
                </li>
                <li className="list-disc text-[#242839] font-normal text-lg pl-2">
                    Pellentesque sit amet justo in neque condimentum mattis
                </li>
            </ul>
            <div className="mt-10">
                <h2 className="font-bold text-2xl text-[#242839] mb-5">
                    Is this solution right for me?
                </h2>
                <p className=" text-[#242839] text-lg font-normal mb-5">
                    Curabitur eu tortor id erat iaculis placerat. Quisque elementum ultricies metus, et semper nisi consectetur quis.
                </p>
                <p className=" text-[#242839] text-lg font-normal ">
                Sed lacinia, massa id porttitor ultrices, sem nisl scelerisque nunc, et condimentum nunc nisl ut arcu. Fusce semper mi pretium lacus viverra ornare vitae eget nibh.
                </p>
            </div>
        </div>
        <InterestedForm />
    </div>
  )
}
