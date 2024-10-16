import { Link } from "react-router-dom";
import { useState } from "react";

interface PlayerCardProps {
  portada: string;
  nombre: string;
  clubActual: string;
  pais: string;
  edad: number;
  altura: string;
  posicion: string;
  playerID: number;
}

export const PlayerCard: React.FC<PlayerCardProps> = (
    {portada, nombre, clubActual, pais, edad, altura, posicion, playerID}
  ) => {

  const [isHovered, setIsHovered] = useState(false)
  const formattedName = nombre.toLowerCase().replace(/\s+/g, '-')
  
  return(
    <Link 
      to={`/jugadores/${playerID}/${formattedName}`}
      className="h-[320px] w-[250px] font-montserrat flex m-3"
    >
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="mx-auto w-full rounded-[15px] relative overflow-hidden
          bg-black hover:bg-gold-base"
      >
        <img 
          src={portada} 
          alt={nombre} 
          className="object-cover w-full h-[320px] opacity-90"
        />
        <img 
          src={clubActual} 
          alt={clubActual} 
          className="absolute right-3 top-3 w-[35px]" 
        />
        <div 
          className={`absolute bottom-0 py-5 w-full
            bg-gradient-to-t to-transparent from-black-dark pt-10
            ${isHovered ? 'from-gold-dark' : ''}`}
        >
          {/* Nombre */}
          <p className="w-full text-white text-center pt-2 font-[600] text-[19px]">
            {nombre}
          </p>
          <p className="w-full text-white text-center pb-2 text-[12px]">
            {posicion}
          </p>
          <div className="grid grid-cols-3 w-8/12 mx-auto">
            {/* Edad */}
            <div className="m-auto text-center">
              <p className="text-white text-[12px] font-[200]">
                Edad
              </p>
              <p className="text-white text-[16px] font-[500]">
                {edad}
              </p>
            </div>

            {/* Estatura */}
            <div className="m-auto text-center">
              <p className="text-white text-[12px] font-[200]">
                Estatura
              </p>
              <p className="text-white text-[16px] font-[500]">
                {altura}
              </p>
            </div>

            {/* Pais */}
            <div className="m-auto text-center">
              <p className="text-white text-[12px] font-[200]">
                País
              </p>
              <img 
                src={pais} 
                alt={pais} 
                className="w-[23px] justify-center m-auto" 
              />
            </div>
          </div>

        </div>
      </div>
    </Link>
  )
}