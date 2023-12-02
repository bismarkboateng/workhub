import React from "react"
import { BlogCMSHeroSection, BlogPost, Button, Footer, Navbar } from "../components"
import Image from "next/image"
import { Cat, Skeleton} from "../public/images"



export default function BlogCMS(props){
    return (
        <>
            <main className="bg-body-background">
                <Navbar />
                <BlogCMSHeroSection />
                <section className="flex lg:p-20 p-5 justify-center" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
                    <div className="flex flex-col gap-y-10 lg:w-2/3 w-full">
                        <div className="flex flex-col gap-y-5">
                            <h3 className="lg:text-4xl text-3xl font-bold font-Outfit text-[#242839]">
                                Integer sit amet neque
                            </h3>
                            <p className="text-[#242839] font-Outfit text-base lg:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tincidunt viverra urna, et aliquam leo semper a. Morbi euismod, massa ut faucibus ultrices, justo dui tempus arcu, quis lobortis elit enim vitae turpis.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <h3 className="text-3xl font-bold font-Outfit text-[#242839]">
                                Vivamus bibendum nibh sit amet
                            </h3>
                            <p className="text-[#242839] font-Outfit text-base lg:text-lg">
                                Aenean non aliquet dolor. Nulla nibh dolor, congue vel varius id, hendrerit quis justo. Mauris ut ipsum nec est gravida molestie. Sed non ipsum varius, ultrices purus volutpat, ultrices lacus.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <p className="text-[#242839] font-Outfit text-base lg:text-lg border-l-4 border-[#285FE2] p-5">
                                Quisque non velit a velit ultrices vestibulum. Vestibulum a lorem id urna vehicula porta. Pellentesque eu vestibulum mauris. Pellentesque gravida sodales risus ut vulputate.
                            </p>
                        </div>
                        <div className="flex flex-col gap-y-5">
                            <h3 className="lg:text-4xl text-3xl font-bold font-Outfit text-[#242839]">
                                Sed faucibus dictum mattis
                            </h3>
                            <p className="text-[#242839] font-Outfit text-base lg:text-lg">
                                Maecenas posuere malesuada nulla at gravida. Cras euismod dolor odio, sit amet egestas lorem accumsan quis. Nam hendrerit luctus consequat. Aenean ultrices ligula sit amet vestibulum malesuada.
                            </p>
                            <ul className="li list-disc flex flex-col gap-y-5 p-5">
                                <li className="text-[#242839] font-Outfit text-base lg:text-lg">Integer vitae libero ac risus egestas placerat</li>
                                <li className="text-[#242839] font-Outfit text-base lg:text-lg">Aliquam tincidunt mauris eu risus</li>
                                <li className="text-[#242839] font-Outfit text-base lg:text-lg">Sed commodo risus sit amet</li>
                            </ul>
                            <p className="text-[#242839] font-Outfit text-base lg:text-lg">
                                Vivamus viverra vel libero sed euismod. Nullam felis elit, laoreet in porttitor nec, fringilla ut risus. Praesent leo enim, ultricies sit amet iaculis non, feugiat in nulla.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="flex lg:p-20 p-5 justify-center" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
                    <div className="w-full bg-[#242839] flex justify-center rounded-md lg:p-20 p-5">
                        <div className="flex flex-col lg:w-1/2 w-full gap-y-5">
                            <h2 className="lg:text-4xl text-3xl font-bold font-Outfit text-[#f6f8ff] text-center">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="text-[#f6f8ff] text-center font-Outfit text-base lg:text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac dapibus diam.
                            </p>
                            <form className="flex">
                                <div className="flex md:flex-row flex-col gap-x-5 w-full gap-y-5 justify-center">
                                    <input className="bg-transparent border border-[#53587a] p-3 rounded md:w-3/5 w-full" type="text" placeholder="Your Email" />
                                    <Button className={`cursor-pointer font-Outfit rounded text-base text-text-color-2 leading-4 p-4 ${props.buttonStyle}`}>
                                        Subscribe
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section className="flex lg:p-20 p-5" data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
                    <div className="flex flex-col w-full gap-y-10 relative">
                        <div className="flex w-full flex-row justify-between">
                            <h3 className="text-3xl md:w-full lg:text-4xl font-bold font-Outfit text-[#242839]">
                                Latest Articles
                            </h3>
                            <Button className={`cursor-pointer hidden md:block font-Outfit bg-transparent border border-[#53587A] rounded text-base text-[#53587A] leading-4 p-4 ${props.buttonStyle}`}>
                                View All Posts
                            </Button>
                        </div>
                        <div className="flex md:flex-row flex-col gap-y-10 gap-x-16">
                            <BlogPost
                                image={Cat}
                                title="Creating a Distraction-Free Workspace"
                                tag="Workplace"
                                text="Cras pulvinar facilisis sodales. In hac habitasse platea dictumst. Suspendisse mauris lacus, dapibus ut."
                            />
                            <BlogPost
                                image={Skeleton}
                                title="The Vital Importance of Ergonomic Workspaces"
                                tag="Wellness"
                                text="Nam blandit lorem velit, in fringilla tellus suscipit a. Pellentesque habitant morbi tristique senectus."
                            />
                        </div>
                        <Button className={`md:hidden cursor-pointer font-Outfit bg-transparent border border-[#53587A] rounded text-base text-[#53587A] leading-4 p-4 ${props.buttonStyle}`}>
                            View All Posts
                        </Button>
                    </div>
                </section>
                <Footer />
            </main>
        </>
    )
}