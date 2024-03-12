import Image from "next/image";
import Pokemon from "../models/Pokemon";
import Type from "./Type";

type menuProps = {
  pokemon: Pokemon
}


export default function Menu({pokemon}: menuProps) {
  const firstType = pokemon.types[0]
  const secondType = pokemon.types[1]

  return (
    <div className="w-screen h-full bg-red-600 z-50 flex flex-col items-center">
      <div className={`relative w-32 h-32 bg-gray-400 rounded-full -top-[4.5rem] flex items-center justify-center border-8 border-red-600 bg-[url('/pokeballs/${firstType.type}-pokeball.svg')] bg-cover rotate-[-40deg]`}>
        <Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} 
          alt={`${pokemon.name} sprite`} 
          width={80} 
          height={80} 
          className="w-24 h-24 rotate-[40deg]"
        />
      </div>
      <div className="relative -top-[4.5rem] flex flex-col text-gray-400">
        <span className="text-center text-xl">{new String((`${'0'.repeat(4 - pokemon.id.toString().length)}${pokemon.id }#`))}</span>
        <span className="text-center text-xl font-bold">{pokemon.name}</span>
        <div className="flex gap-3">
          <Type type={firstType} />
          {secondType && <Type type={secondType} />}
        </div>
      </div>
    </div>
  )
}