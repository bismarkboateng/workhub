
export default function index({ post, className }) {
  return (
    <section className={`mt-9 border-b border-[#e6e8f5] pb-6 ${className}`}>
        <div className="flex flex-row gap-4 font-Outfit text-[13px] md:text-[14px]
         leading-[16.9px]">
          <p className="text-text-color-3">{post.location}</p>
          <p className="text-[#7e83ac]">{post.date}</p>
        </div>
        <div className="w-[93%] font-Outfit text-xl md:text-[23px] font-semibold text-text-color
        leading-[26px] mt-2">
          {post.title}
        </div>
        <p className="text-[#53587a] text-base md:text-lg font-Outfit leading-6 mt-2">
          {post.content}
        </p>
    </section>
  )
}