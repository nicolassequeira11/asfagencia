import { ReactNode } from 'react';

import { About } from "../../components/Home/About";
import { GoGoal } from "react-icons/go";
import { FaStar } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";

interface SobreNosotrosItem {
  icono: ReactNode;
  titulo: string;
  texto: string[];
}

export const AboutPage = () => {
  const sobreNosotros = [
    {
      icono: <GoGoal className='size-[100px]' />,
      titulo: "Misión",
      texto: [
        "Nuestra misión es representar y defender los intereses de futbolistas, ofreciendo un servicio profesional y ético que garantice su desarrollo y bienestar en el competitivo mundo del deporte. A través de un enfoque integral y estratégico, nos comprometemos a brindar asesoría legal y gestión de carrera, permitiendo que nuestros atletas se concentren en lo que mejor saben hacer: jugar al fútbol.",
      ]
    },
    {
      icono: <FaStar className='size-[100px]' />,
      titulo: "Visión",
      texto: [
        "Nuestra visión es ser reconocidos como líderes en la representación de futbolistas a nivel nacional e internacional, promoviendo un entorno en el que cada atleta pueda alcanzar su máximo potencial. Buscamos establecer relaciones de confianza y colaboración con nuestros clientes, clubes y entidades deportivas, impulsando una cultura de excelencia y desarrollo en el deporte.",
      ]
    },
    {
      icono: <FaHandshake className='size-[100px]' />,
      titulo: "Valores",
      texto: [
        "Integridad: Actuamos con honestidad y transparencia en todas nuestras interacciones, priorizando siempre el bienestar de nuestros futbolistas.",
        "Compromiso: Nos dedicamos plenamente a la representación de nuestros clientes, trabajando incansablemente para alcanzar sus metas y proteger sus intereses.",
        "Respeto: Valoramos la diversidad y la individualidad de cada atleta, fomentando un ambiente de respeto y dignidad en todas nuestras relaciones.",
        "Profesionalismo: Mantenemos los más altos estándares de calidad en nuestro trabajo, respaldados por nuestra sólida formación y experiencia en derecho deportivo.",
        "Innovación: Nos adaptamos a los cambios del mercado y buscamos constantemente nuevas oportunidades para maximizar el éxito de nuestros clientes.",
      ]
    },
  ]

  return(
    <div className="mt-[94px] max-lg:mt-[84px] font-montserrat">
      <h2 
        className="font-[800] text-[30px] w-full mx-auto text-center 
          mb-6 bg-gold-base py-4 text-white max-sm:text-[24px]"
      >
        SOBRE NOSOTROS
      </h2>
      <About />

      {/* Valores */}
      <div className='my-16 border-t-2 border-gold-base pt-20 border-opacity-30'>
        {sobreNosotros.map((item:SobreNosotrosItem, index:number) => (
          <div 
            key={index} 
            className='w-9/12 mb-14 mx-auto flex gap-8 max-md:flex-col max-sm:w-10/12'
          >
            <div className='text-gold-base max-sm:mx-auto'>
              {item.icono}
            </div>
            <div>
              <p className='font-[600] text-[28px] max-sm:text-center max-sm:-mt-6 max-sm:mb-4'>
                {item.titulo}
              </p>
              {item.texto.map((item:string, index: number) => (
                <p key={index} className='mb-4 text-justify'>
                  {item}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}