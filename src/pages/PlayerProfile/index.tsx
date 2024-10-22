import { useParams } from "react-router-dom";
import { PlayersData } from "../../data/players";
import { ReviewCard } from "../../components/Home/Reviews/ReviewCard";

import { CiCalendarDate } from "react-icons/ci";
import { GiBodyHeight } from "react-icons/gi";
import { GiSoccerField } from "react-icons/gi";
import { GiBarefoot } from "react-icons/gi";


export const PlayerProfile = () => {
  const { playerID } = useParams<{ playerID: string }>();
  const player = PlayersData.players.find(
    player => String(player.id) === playerID // Asegúrate de comparar el id como string
  );

  if (!player) {
    return <p>Jugador no encontrado</p>;
  }

  return(
    <div className="font-montserrat mt-[94px] max-lg:mt-[84px]">
      <div className="mb-8">
        {/* Nombre */}
        <h1 
          className="text-[50px] font-[800] text-center text-white py-4 bg-black-base
            max-md:text-[28px]"
        >
          {player.nombre}
        </h1>

        {/* Info */}
        <div 
          className="flex w-[70rem] max-w-[90vw] mx-auto gap-6 mt-10
            max-md:flex-col max-md:mt-6 fadein"
        >

          {/* Portada */}
          <div 
            className="w-4/12 h-[510px] border-4 border-gold-base
              max-md:w-fit max-md:mx-auto"
          >
            <img 
              src={player.portada} 
              alt={player.nombre} 
              className="h-full object-cover mx-auto" 
            />
          </div>

          <div 
            className="flex flex-col w-8/12 
              max-md:w-11/12 max-md:mx-auto"
          >

            {/* Equipo actual */}
            <div className="flex flex-row justify-between border-b-2 pb-4 border-gold-base">
              
              {/* Transfermarkt */}
              {player.transfermarkt ? 
                <a 
                  href={player.transfermarkt} 
                  target="_blank"
                  className="w-2/12 my-auto"
                >
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Transfermarkt_logo.png/1200px-Transfermarkt_logo.png"
                    alt="Transfermarkt" 
                  />
                </a>
              : <div></div>}

              <div className="flex">

                {/* Nombre equipo actual */}
                <div 
                  className="my-auto me-3"
                >
                  <p className="text-[24px] font-[700] text-end max-md:text-[18px]">
                    {player.clubActual[0].nombre}
                  </p>
                  <p className="text-[14px] text-end">
                    Equipo actual
                  </p>
                  <p className="text-[14px] text-end">
                    {player.clubActual[0].liga}
                  </p>
                </div>

                {/* Escudo equipo actual */}
                <img 
                  src={player.clubActual[0].escudo} 
                  alt={player.clubActual[0].nombre}
                  className="w-[80px] object-contain" 
                />
              </div>
              
            </div>
            
            <div className="grid grid-cols-2 gap-8 w-10/12 mx-auto mt-8 max-md:w-11/12 max-sm:grid-cols-1">

              {/* Nacionalidad */}
              <div className="flex">
                <img 
                  src={player.pais[0].bandera} 
                  alt={player.pais[0].nombre} 
                  className="w-[50px] object-contain"
                />
                <div className="my-auto ms-3"> 
                  <p className="font-[600] text-[20px] text-gold-dark">
                    País
                  </p>
                  <p>{player.pais[0].nombre}</p>
                </div>
              </div>

              {/* Fecha de nacimiento */}
              <div className="flex">
                <CiCalendarDate 
                  className="w-[45px] text-[50px] text-gold-dark" 
                />
                <div className="ms-3">
                  <p className="font-[600] text-[20px] text-gold-dark">
                    Nacimiento
                  </p>
                  <p>{player.fechaNacimiento} ({player.edad} años)</p>
                </div>
              </div>

              {/* Altura */}
              <div className="flex">
                <GiBodyHeight 
                  className="mt-1 w-[50px] text-[40px] text-gold-dark" 
                />
                <div className="ms-3">
                  <p className="font-[600] text-[20px] text-gold-dark">
                    Altura
                  </p>
                  <p>{player.altura}</p>
                </div>
              </div>

              {/* Pierna habil */}
              <div className="flex">
                <GiBarefoot 
                  className="mt-2 w-[50px] text-[30px] text-gold-dark" 
                />
                <div className="ms-3">
                  <p className="font-[600] text-[20px] text-gold-dark">
                    Pierna hábil
                  </p>
                  <p>{player.pierna}</p>
                </div>
              </div>

              {/* Posición */}
              <div className="flex">
                <GiSoccerField 
                  className="w-[50px] text-[40px] text-gold-dark" 
                />
                <div className="ms-3">
                  <p className="font-[600] text-[20px] text-gold-dark">
                    Posición
                  </p>
                  <p>{player.posicion1}</p>

                  {/* Si existe posición secundaria mostrar, sino no */}
                  {player.posicion2 ?
                    <p>{player.posicion2}</p>
                  : ""}
                </div>
              </div>
            </div>

            {/* Clubes */}
            <div className="flex flex-wrap w-full justify-center gap-8 mx-auto mt-10">
              {player.clubes.map((item:{nombre:string, escudo: string, pais: string}, index:number) => (
                <div 
                  key={index} 
                  className="my-auto h-full"
                >
                  <img 
                    src={item.escudo} 
                    alt={item.nombre} 
                    className="w-[40px] h-full object-contain"
                  />
                </div>
              ) )}
            </div>

          </div>
        </div>

        {/* Highlights */}
        {player.highlights ? 
          <div className="mx-auto w-full my-20">
            <p 
              className="font-[800] text-[30px] w-full mx-auto text-center 
                mb-10 bg-gold-base py-4 text-white max-sm:text-[24px]"
            >
              HIGHLIGHTS
            </p>
            <iframe
              width="760"
              height="420"
              src={player.highlights}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mx-auto max-md:w-11/12 max-sm:h-[200px]"
            ></iframe>
          </div>
        : ""}

        {/* Reseña */}
        {player.review ? 
          <div>
            <p 
              className="font-[800] text-[30px] w-full mx-auto text-center 
                mb-10 bg-gold-base py-4 text-white max-sm:text-[24px]"
            >
              TESTIMONIO
            </p>
            <ReviewCard
              texto={player.review}
              titulo={player.titleReview}
              nombre={player.nombre}
              img={player.portada}
            />
          </div>
        : ""}
      </div>
    </div>
  )
}