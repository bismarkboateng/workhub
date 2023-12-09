import React from 'react'
import { BlogPost, Navbar, Button, Footer} from '../components'
import { Cat , Skeleton ,} from '../public/images'

const blog = (props) => {
  return (
    <div className='bg-body-background text-base'>
    <Navbar />
    <div className='text-5xl font-bold flex justify-center mt-20'>WorkHub Blog</div>
    <div className='flex flex-col justify-center items-center text-xl text-gray-600 mt-16'>
        <div>Curabitur volutpat, magna sit amet pretium convallis, purus urna lobortis</div>
        <div>nunc, nec tempor urna nisl id nunc.</div>
    </div>

    <div className='flex justify-center items-center gap-x-4 mt-8'>
    <Button
            className={`cursor-pointer font-Outfit rounded text-base
            text-text-color-2 leading-4 p-4 ${props.buttonStyle}`}
        >
            All Posts
        </Button>
    <button className="bg-white text-lg text-blue-950 border-blue-950 border-2 py-2 px-4 rounded">Workplace</button>
    <button className="bg-white text-lg text-blue-950 border-blue-950 border-2 py-2 px-4 rounded">Technology</button>
    <button className="bg-white text-lg text-blue-950 border-blue-950 border-2 py-2 px-4 rounded">Wellness</button>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 md:p-20 lg:p-40 gap-x-16" >
      <div className=''>
        <BlogPost
            image={Cat}
            title="Creating a Distraction-Free Workspace"
            tag="Workplace"
            text="Cras pulvinar facilisis sodales. In hac habitasse platea dictumst. Suspendisse mauris lacus, dapibus ut."
        />
      </div>
      <div>
        <BlogPost
            image={Skeleton}
            title="The Vital Importance of Ergonomic Workspaces"
            tag="Wellness"
            text="Nam blandit lorem velit, in fringilla tellus suscipit a. Pellentesque habitant morbi tristique senectus."
        />
      </div>
      <div>
        <BlogPost
            image={Skeleton}
            title="The Vital Importance of Ergonomic Workspaces"
            tag="Wellness"
            text="Nam blandit lorem velit, in fringilla tellus suscipit a. Pellentesque habitant morbi tristique senectus."
        />
      </div>
      <div>
        <BlogPost
            image={Skeleton}
            title="The Vital Importance of Ergonomic Workspaces"
            tag="Wellness"
            text="Nam blandit lorem velit, in fringilla tellus suscipit a. Pellentesque habitant morbi tristique senectus."
        />
      </div>
      <div>
        <BlogPost
            image={Skeleton}
            title="The Vital Importance of Ergonomic Workspaces"
            tag="Wellness"
            text="Nam blandit lorem velit, in fringilla tellus suscipit a. Pellentesque habitant morbi tristique senectus."
        />
      </div>
      <div>
        <BlogPost
            image={Skeleton}
            title="The Vital Importance of Ergonomic Workspaces"
            tag="Wellness"
            text="Nam blandit lorem velit, in fringilla tellus suscipit a. Pellentesque habitant morbi tristique senectus."
        />
      </div>
        
        </div>

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
                <Footer />
    </div>
  )
}

export default blog
// data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000"