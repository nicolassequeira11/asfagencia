import { PlayerCard } from "../../components/Players/PlayerCard"
import { PlayersData } from "../../data/players"

interface PlayersProps {
  portada: string;
  nombre: string;
  clubActual: { nombre: string; escudo: string; pais: string }[]; // Array de objetos
  pais: { nombre: string; bandera: string }[]; // Array de objetos
  edad: string;
  altura: string;
  posicion1: string;
  id: number;
}

export const PlayersPage = () => {
  return(
    <div className="mt-[94px] max-md:mt-[84px] font-montserrat">
      <h1 
        className="font-[800] text-[30px] w-full mx-auto text-center 
          mb-6 bg-gold-base py-4 text-white max-sm:text-[24px]"
      >
        JUGADORES
      </h1>

      <div className="flex flex-wrap w-full mx-auto justify-center py-6">  
        {PlayersData.players.map((player:PlayersProps, index:number) => (
          <PlayerCard
            key={index} 
            playerID={player.id}
            portada={player.portada}
            nombre={player.nombre}
            posicion={player.posicion1}
            altura={player.altura}
            clubActual={player.clubActual[0].escudo}
            pais={player.pais[0].bandera}
            edad={parseInt(player.edad)}
          />
        ))}
      </div>
    </div>
  )
}