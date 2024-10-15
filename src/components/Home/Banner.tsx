import UnderArmour from "../../assets/under-armour.png"
import FIFAagent from "../../assets/Fifa-Agent.png"
import ImgBannerHome from "../../assets/banner-home.jpg"

export const BannerHome = () => {
  return(
    <div className="bg-gradient-to-b from-gray-700 to-black-dark h-[85vh] relative font-montserrat">

      {/* Background img */}
      <img 
        src={ImgBannerHome} 
        alt="ASF Agencia" 
        className="h-full w-full object-cover opacity-20" 
      />

      <div className="w-11/12 flex mx-auto absolute bottom-0 left-0 right-0 max-sm:flex-col">

        {/* Slogan */}
        <div className="w-1/2 my-auto max-sm:w-11/12 max-sm:mx-auto">
          <p className="text-white text-[38px] font-[600] max-sm:text-[32px]">
            Protegiendo tus derechos, potenciando tu carrera.
          </p>
        </div>

        {/* Logos */}
        <div className="w-1/2 flex max-sm:w-11/12 max-sm:mx-auto">

          {/* FIFA Agent */}
          <div className="w-1/2">
            <img 
              src={FIFAagent} 
              alt="FIFA Agent" 
              className="w-full h-full p-14 object-contain max-sm:p-0"      
            />
          </div>

          {/* Ander Armour */}
          <div className="w-1/2">
            <img 
              src={UnderArmour} 
              alt="Under Armour" 
              className="w-full h-full p-20 object-contain max-sm:p-8 max-sm:ms-6"
            />
          </div>

        </div>
      </div>
    </div>
  )
}