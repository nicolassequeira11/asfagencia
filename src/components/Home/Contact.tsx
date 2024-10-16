import BackgroundContact from "../../assets/background-contact-home.jpg"
import { Link } from "react-router-dom"

export const Contact = () => {
  return(
    <div className="font-montserrat bg-black-dark relative mt-20">
      <img 
        src={BackgroundContact} 
        alt="ASF Agencia de Fútbol" 
        className="h-[300px] w-full object-cover opacity-30"
      />
      <div 
        className="absolute flex flex-col m-auto justify-center left-0 right-0 top-0 bottom-0"
      >
        <p className="w-full text-center font-[600] text-[26px] text-white">
          ¿Quieres ser representado por ASF Agencia?
        </p>
        <p className="w-full text-center font-[500] text-[20px] mt-2 text-white">
          ¡Ponte en contacto con nosotros!
        </p>
     
        <Link to="/contacto"
          className="text-[18px] font-[700] text-center flex justify-center text-black-base mt-8 w-fit mx-auto
            bg-gradient-to-tl from-gold-base to-gold-light hover:to-gold-dark px-6 py-3 rounded-full"
        >
          Contacto
        </Link>
      </div>
    </div>
  )
}