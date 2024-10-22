import UnderArmour from "../../assets/under-armour.png"
import FIFAagent from "../../assets/Fifa-Agent.png"
import ImgBannerHome from "../../assets/banner-home.jpg"

export const BannerHome = () => {
  return(
    <div 
      className="bg-gradient-to-b from-gray-700 to-black-dark h-[40vh] relative font-montserrat
        max-lg:h-[60vh] mt-[93px] max-lg:mt-[84px]"
    >

      {/* Background img */}
      <img 
        src={ImgBannerHome} 
        alt="ASF Agencia" 
        className="h-full w-full object-cover opacity-20" 
      />

      <div 
        className="w-10/12 lg:gap-4 flex m-auto absolute top-0 bottom-0 left-0 right-0 
          max-lg:flex-col justify-center"
      >

        {/* Slogan */}
        <div className="w-1/2 only:md:my-0 only:lg:my-0 my-auto max-lg:w-11/12 max-lg:mx-auto">
          <p className="text-white text-[38px] font-[600] max-xl:text-[32px] fadein">
            Protegiendo tus derechos, potenciando tu carrera.
          </p>
        </div>

        {/* Logos */}
        <div className="w-1/2 fadein only:md:my-0 only:lg:my-0 my-auto max-md:gap-10 flex max-lg:w-11/12 max-lg:mx-auto">

          {/* FIFA Agent */}
          <div className="w-1/2">
            <img 
              src={FIFAagent} 
              alt="FIFA Agent" 
              className="w-full h-full p-14 object-contain max-md:p-0
                lg:p-6"      
            />
          </div>

          {/* Ander Armour */}
          <div className="w-1/2">
            <img 
              src={UnderArmour} 
              alt="Under Armour" 
              className="w-full h-full p-14 object-contain max-md:p-0
               lg:p-6"
            />
          </div>

        </div>
      </div>
    </div>
  )
}