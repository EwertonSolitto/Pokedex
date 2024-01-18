import Image from "next/image";

export default function PokemonCard() {
  return (
    <li className="w-80  h-[7.5rem] bg-gray-100 border-red-800 border-solid border-8 rounded-full flex items-center">
      <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gray-400 ml-1 bg-[url('/pokeballs/grass-pokeball.svg')] bg-cover rotate-[-40deg]">
        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" width={80} height={80} className="w-20 h-20 rotate-[40deg]"/>
      </div>
      <div className="text-gray-400 w-[10.5rem] h-full ml-1 py-1 flex flex-col justify-between">
        <div className="flex flex-row justify-between">
          <h2 className="text-base font-bold">Bulbasaur</h2>
          <span>
            0001#
          </span>
        </div>
        <div className="flex flex-col text-sm">
          <span>
            Peso: 6,9kg
          </span>
          <span>
            Altura: 0,7m
          </span>
        </div>
        <div className="flex flex-row justify-between text-sm">
          <span className="w-20 h-6 bg-lime-500 flex justify-center items-center rounded-full font-bold pt-[3px]">
            Planta
          </span>
          <span className="w-20 h-6 bg-fuchsia-800 flex justify-center items-center rounded-full font-bold pt-[3px]">
            Venenoso
          </span>
        </div>
      </div>
      <Image src={'/pokeballs/grass-pokeball.svg'} alt="green pokeball" width={64} height={64} className="absolute ml-48 mb-5 opacity-50" />
    </li>
  )
}