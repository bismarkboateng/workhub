
export default function index() {
  return (
    <section className="w-[90%] md:w-[95%] 2xl:w-[64%] mx-auto
      flex flex-col md:flex-row md:items-center md:gap-10 xl:gap-20">
      <div className="lg:w-[90%] xl:w-[60%]">
       <img
         src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef16a175d625349598a868_About%202.jpg"
         alt="vision"
         className="rounded-md"
       />
      </div>
      <div className="mt-8 lg:w-[90%]">
        <h2 className="text-[31px] md:text-[35px] text-text-color font-semibold 
          leading-[40.3px] md:w-[80%] font-Outfit">
          Vision and Mission: Empowering Workspaces
        </h2>
        <p className="text-base md:text-lg leading-6 font-Outfit text-text-color mt-3">
         Nam imperdiet leo vel magna rhoncus rhoncus.
         Proin bibendum nisl at pharetra semper.
         Mauris sed sapien maximus, rutrum massa at, placerat justo.
        </p>
      </div>
    </section>
  )
}