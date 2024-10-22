import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

export const ContactPage = () => {
  return(
    <div className="mt-[94px] max-lg:mt-[84px] mb-20 font-montserrat">
      <h1 
        className="font-[800] text-[30px] w-full mx-auto text-center 
          mb-6 bg-gold-base py-4 text-white max-sm:text-[24px]"
      >
        ¡CONTÁCTANOS!
      </h1>

      {/* Descripción */}
      <p className="w-8/12 mx-auto my-auto text-justify max-sm:w-10/12 max-sm:text-[14px]">
        En ASF Agencia, nos especializamos en brindar asesoría legal a futbolistas para que puedan concentrarse en lo que mejor saben hacer: jugar al fútbol. Nuestro equipo de expertos en derecho deportivo está aquí para proteger tus intereses y ayudarte a alcanzar tus objetivos profesionales.
      </p>

      {/* Botones */}
      <div 
        className="grid grid-cols-3 w-8/12 mx-auto mt-8 gap-10 max-lg:grid-cols-1 max-lg:gap-6
          max-sm:w-10/12"
      >
        
        {/* Botón correo */}
        <div 
          className="w-full flex gap-10 flex-col px-4 py-6 mx-auto text-center 
            shadow-[rgba(0,0,0,_0.05)_0px_9px_30px] rounded-[25px] mt-6"
        >
          <a 
            href="mailto:videoanalistacp@gmail.com"
            target="_blank"
            className="mx-auto"
          >
            <MdEmail 
              className="text-white bg-gold-base p-3 rounded-full text-[70px] mx-auto mb-5"
            />
            <p>asfagencia@hotmail.com</p>
            
            {/* <a 
              href="mailto:sadasd@hotmail.com"
              className="text-[18px] font-[700] text-center flex justify-center text-white mt-4 w-fit mx-auto
                bg-gradient-to-tl from-gold-base to-gold-light hover:to-gold-dark px-6 py-3 rounded-full"
            >
              Enviar correo
            </a> */}
          </a>
        </div>

        {/* Botón numero */}
        <div 
          className="w-full flex gap-10 flex-col px-4 py-6 mx-auto text-center 
            shadow-[rgba(0,0,0,_0.05)_0px_9px_30px] rounded-[25px] mt-6"
        >
          <div 
            className="mx-auto"
          >
            <FaPhoneFlip 
              className="text-white bg-gold-base p-3 rounded-full text-[70px] mx-auto mb-5"
            />
            <p>+598 097 774 358</p>
            
            {/* <a 
              href="mailto:sadasd@hotmail.com"
              className="text-[18px] font-[700] text-center flex justify-center text-white mt-4 w-fit mx-auto
                bg-gradient-to-tl from-gold-base to-gold-light hover:to-gold-dark px-6 py-3 rounded-full"
            >
              Llamar
            </a> */}
          </div>
        </div>

        {/* Botón Instagram */}
        <div 
          className="w-full flex gap-10 flex-col px-4 py-6 mx-auto text-center 
            shadow-[rgba(0,0,0,_0.05)_0px_9px_30px] rounded-[25px] mt-6"
        >
          <a 
            href="https://www.instagram.com/drsobrinoalejandro/"
            target="_blank"
            className="mx-auto"
          >
            <FaInstagram 
              className="text-white bg-gold-base p-3 rounded-full text-[70px] mx-auto mb-5"
            />
            <p>@drsobrinoalejandro</p>
            
            {/* <a 
              href="mailto:sadasd@hotmail.com"
              className="text-[18px] font-[700] text-center flex justify-center text-white mt-4 w-fit mx-auto
                bg-gradient-to-tl from-gold-base to-gold-light hover:to-gold-dark px-6 py-3 rounded-full"
            >
              Enviar mensaje
            </a> */}
          </a>
        </div>
      </div>
    </div>
  )
}