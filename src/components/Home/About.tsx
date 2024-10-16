import AlejandroSobrino from "../../assets/alejandro sobrino.png"

export const About = () => {
  return(
    <div className="font-montserrat">

      <div 
        className="flex w-9/12 mx-auto py-8 gap-12 
          max-sm:flex-col-reverse max-sm:w-11/12"
      >

        {/* Descripción Alejandro Sobrino */}
        <div 
          className="w-3/4 my-auto max-sm:w-11/12 max-sm:mx-auto max-sm:-mt-4"
        >
          <p className="font-[700] text-[24px] max-sm:text-center">
            Dr. Alejandro Sobrino
          </p>
          <p className="font-[400] text-[18px] max-sm:text-center">
            Abogado Especialista en Derecho Deportivo | Agente FIFA
          </p>
          <p className="mt-2 max-sm:text-justify max-sm:mx-auto max-sm:mt-6">
            Alejandro Sobrino es un reconocido agente de fútbol con una sólida formación en derecho deportivo. Su experiencia como abogado especializado le permite ofrecer un enfoque integral y estratégico en la representación de atletas, asegurando que sus intereses estén siempre protegidos.
          </p>
        </div>

        {/* Foto Alejandro Sobrino */}
        <div className="w-1/4 max-sm:w-6/12 max-sm:mx-auto">
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