import AlejandroSobrino from "../../assets/alejandro sobrino.png"

export const About = () => {
  return(
    <div className="font-montserrat">

      <div 
        className="flex w-9/12 mx-auto py-12 gap-12 justify-center
          max-md:flex-col-reverse max-sm:w-11/12"
      >

        {/* Descripción Alejandro Sobrino */}
        <div 
          className="w-[50rem] my-auto max-md:w-11/12 max-md:mx-auto max-md:-mt-4"
        >
          <p className="font-[700] text-[24px] max-md:text-center">
            Dr. Alejandro Sobrino
          </p>
          <p className="font-[400] text-[18px] max-md:text-center">
            Abogado Especialista en Derecho Deportivo | Agente FIFA
          </p>
          <p className="mt-2 max-md:text-justify max-md:mx-auto max-md:mt-6">
            Alejandro Sobrino es un reconocido agente de fútbol con una sólida formación en derecho deportivo. Su experiencia como abogado especializado le permite ofrecer un enfoque integral y estratégico en la representación de atletas, asegurando que sus intereses estén siempre protegidos.
          </p>
        </div>

        {/* Foto Alejandro Sobrino */}
        <div className="w-[17rem] max-md:w-6/12 max-md:mx-auto">
          <img 
            src={AlejandroSobrino} 
            alt="Agente FIFA Alejandro Sobrino"
            className="border-4 border-gold-base rounded-full" 
          />
        </div>
      </div>

    </div>
  )
}