import { useState } from "react"
import { FaSearch } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

import { PlayerCard } from "../../components/Players/PlayerCard"
import { PlayersData } from "../../data/players"
import { DropdownButton } from "../../components/Buttons/Dropdown"

interface PlayersProps {
  portada: string;
  nombre: string;
  clubActual: { nombre: string; escudo: string; pais: string }[];
  pais: { nombre: string; bandera: string }[];
  edad: string;
  altura: string;
  posicion1: string;
  id: number;
}

export const PlayersPage = () => {
  const [selectedPosition, setSelectedPosition] = useState<string>("")
  const [selectedCountry, setSelectedCountry] = useState<string>("")
  const [selectedLeg, setSelectedLeg] = useState<string>("")

  const positions = [...new Set(PlayersData.players.map(player => player.posicion1))]
  const countries = [...new Set(PlayersData.players.flatMap(player => player.pais.map(p => p.nombre)))]
  const legs = [...new Set(PlayersData.players.map(player => player.pierna).filter(leg => leg))]

  const handlePositionChange = (position: string) => {
    setSelectedPosition(position)
  }

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country)
  }

  const handleLegChange = (leg: string) => {
    setSelectedLeg(leg)
  }

  const handleResetFilters = () => {
    setSelectedCountry("")
    setSelectedLeg("")
    setSelectedPosition("")
  }

  const filteredPlayers = PlayersData.players.filter(player => {
    return (
      (selectedPosition === "" || player.posicion1 === selectedPosition) &&
      (selectedCountry === "" || player.pais[0].nombre === selectedCountry) &&
      (selectedLeg === "" || player.pierna === selectedLeg)
    )
  })

  return(
    <div className="mt-[94px] max-md:mt-[84px] font-montserrat">
      <h1 
        className="font-[800] text-[30px] w-full mx-auto text-center 
          mb-6 bg-gold-base py-4 text-white max-sm:text-[24px]"
      >
        JUGADORES
      </h1>

      {/* Filtros */}
      <div className="flex w-11/12 mx-auto gap-4 max-sm:justify-center">   
        <p className="my-auto max-sm:hidden">
          Filtrar por:
        </p>
        {/* Posición */}
        <div>
          <DropdownButton 
            title="Posición"
            selected={selectedPosition}
            array={positions.map(pos => ({ key: pos, label: pos }))}
            onChange={handlePositionChange}
          />
        </div>
        {/* País */}
        <div>
          <DropdownButton 
            title="País"
            selected={selectedCountry}
            array={countries.map(country => ({ key: country, label: country }))}
            onChange={handleCountryChange}
          />
        </div>
        {/* Pierna */}
        <div>
          <DropdownButton 
            title="Pierna"
            selected={selectedLeg}
            array={legs.map(leg => ({ key: leg, label: leg }))}
            onChange={handleLegChange}
          />
        </div>

        {/* Reset */}
        <button
          className="my-auto"
          onClick={handleResetFilters}
        >
          <GrPowerReset 
            className="size-5 text-black-base"
          />
        </button>
      </div>

      <div className="flex flex-wrap w-full mx-auto justify-center py-6">  
        {filteredPlayers.map((player:PlayersProps, index:number) => (
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

        {filteredPlayers.length === 0 
        ? 
        <div className="w-full mx-auto justify-center py-40">
          <FaSearch 
            className="size-[80px] text-gold-base mx-auto"
          />
          <p className="text-center mt-8 text-[26px] max-sm:text-[22px] max-sm:w-11/12 max-sm:mx-auto">
            No se encontrarón jugadores. Por favor cambie los filtros seleccionados.
          </p>
        </div> 
        : ""}
      </div>
    </div>
  )
}