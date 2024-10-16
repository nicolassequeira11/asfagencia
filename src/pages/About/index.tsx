import { About } from "../../components/Home/About";

export const AboutPage = () => {
  return(
    <div className="mt-[93px] max-md:mt-[84px] font-montserrat">
      <h2 
        className="font-[800] text-[30px] w-full mx-auto text-center 
          mb-6 bg-gold-base py-4 text-white max-sm:text-[24px]"
      >
        SOBRE NOSOTROS
      </h2>
      <About />
    </div>
  )
}