import { ServicesLayout } from "./ServiceLayout"

export const Services = () => {


  return(
    <div className="mx-auto py-20 font-montserrat">
      <h2 
        className="font-[800] text-[30px] w-full mx-auto text-center 
          mb-6 bg-gold-base py-4 text-white max-sm:text-[24px]"
      >
        NUESTROS SERVICIOS
      </h2>
      <ServicesLayout />
    </div>
  )
}