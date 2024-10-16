import { ReviewLayout } from "./ReviewLayout"

export const Review = () => {
  return(
    <div className="font-montserrat py-20">
      <h2 
        className="font-[800] text-[30px] w-full mx-auto text-center 
          mb-20 max-md:mb-10 bg-gold-base py-4 text-white max-sm:text-[24px]"
      >
        TESTIMONIOS
      </h2>
      <ReviewLayout />
    </div>
  )
}