import { ServicesLayout } from "../../components/Home/Services/ServiceLayout"

export const ServicesPage = () => {
  return(
    <div className="mt-[94px] max-lg:mt-[84px] font-montserrat mb-[200px]">
      <h1 
        className="font-[800] text-[30px] w-full mx-auto text-center 
          mb-6 bg-gold-base py-4 text-white max-sm:text-[24px]"
      >
        NUESTROS SERVICIOS
      </h1>
      <ServicesLayout />
    </div>
  )
}