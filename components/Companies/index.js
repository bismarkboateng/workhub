


export default function index() {
  const imageStyles = "w-[150px] md:w-[180px] lg:w-[200px]"
  return (
    <section className="w-full mt-20 bg-body-background">
      <section className="w-[90%] mx-auto">
        <div>
          <h2
            className="w-[100%] text-[31px] md:text-[35px] lg:text-[39px] font-Outfit font-semibold
            leading-[40.3px] text-text-color text-center"
          >
            Trusted by Leading Companies
          </h2>

          <p className="w-[100%] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[35%] 
           mx-auto mt-4 font-Outfit text-base md:text-lg leading-6 text-[#53587a] text-center">
            No big deal for me, it's the most important part of life, the fear of basketball.
          </p>
        </div>

        <div className="w-[100%] lg:w-[80%] 2xl:w-[50%] mx-auto mt-12 grid grid-cols-2 md:grid-cols-3
            gap-y-7 md:gap-y-10">
          <img
            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef1232b59f5bc545969fcd_Logoipsum%201.svg"
            className={imageStyles}
            alt="logoipsum1"
          />
          <img
            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef12326edc0c50f42f7140_Logoipsum%203.svg"
            className={imageStyles}
            alt="logoipsum2"
          />
          <img
            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef12320655719ad6af9824_Logoipsum%204.svg"
            className={imageStyles}
            alt="logoipsum3"
          />
          <img
            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef1232cf74c28035ca90a0_Logoipsum%202.svg"
            className={imageStyles}
            alt="logoipsum4"
          />
          <img
            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef12326a0e0fe40b80350b_Logoipsum%206.svg"
            className={imageStyles}
            alt="logoipsum5"
          />
          <img
            src="https://assets-global.website-files.com/64ec80c5a379b568b72122d6/64ef12321a428ba7c2cc572c_Logoipsum%205.svg"
            className={imageStyles}
            alt="logoipsum6"
          />
        </div>
      </section>
    </section>
  )
}
