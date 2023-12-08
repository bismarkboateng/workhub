
import { Post, Button } from ".."
import { posts } from "./post-data"

export default function index() {
  const post = {
      location: "Workplace",
      date: "October 9, 2023",
      title: "Creating Distraction-Free Workspace",
      content: `Cras pulvinar facilisis sodales. 
          In hac habitasse platea dictumst. 
          Suspendisse mauris lacus, dapibus ut.
      `,
  }
  return (
    <section className="w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto mt-14">
        <div className="flex flex-col md:flex-row
            md:justify-between md:items-center">
            <h1 className="text-[31px] text-text-color font-Outfit font-semibold
                leading-[40.3px]">
            Stay in the know
            </h1>
            <Button
            className="hidden md:block mt-8 font-Outfit bg-white text-[#53587a]
            border border-[#53587C] text-lg py-[18px] px-[20px] outline-none text-center
            mb-4 cursor-pointer rounded bg-[#f6f8ff]"
            >
            View All Posts
            </Button>
        </div>

      <div className="mt-9 flex flex-col md:flex-row md:gap-8 2xl:gap-20 md:items-start
       md:justify-start">
        <img
            src="https://assets-global.website-files.com/64ed7cce29f3b2cfe859f6fd/64eda49aa810cb6d001f33de_Blog%201.jpg"
            alt="cat"
            className="w-[100%] md:w-[50%] h-[100%] object-cover rounded-md mb-8 md:mb-0 cursor-pointer
            hover:scale-x-101 transition ease-in"
            data-aos="zoom-in"
        />
        <Post
            post={post}
            className="mt-0 lg:mt-12 xl:mt-24"
        />
      </div>

      <section className="mt-3 grid md:grid-cols-2 md:gap-x-10 2xl:gap-x-40">
        {posts.map((post) => <Post key={post.id} post={post} />)}
      </section>
      <Button
        className="mt-8 w-[100%] font-Outfit bg-white text-[#53587a]
        border border-[#53587C] text-base py-[18px] outline-none text-center
        mb-4 cursor-pointer rounded bg-[#f6f8ff] md:hidden"
      >
        View All Posts
      </Button>
    </section>
  )
}
