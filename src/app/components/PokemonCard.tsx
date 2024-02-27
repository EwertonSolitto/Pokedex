import Image from "next/image";
import Pokemon from "../models/Pokemon";
import bgTypes from "../classes/bgTypes";
import pokeballTypes from "../classes/pokeballTypes";


export default function PokemonCard(props: { pokemon: Pokemon, style: string}) {
  const { pokemon, style } = props
  const { name, id, height, weight, types } = pokemon
  const tailwindLoader = [bgTypes, pokeballTypes]

  const firstType = types[0]

  const pokemonNumber = new String((`${'0'.repeat(4 - id.toString().length)}${id}#`))

  return (
    <li className={`absolute w-80 h-[7.5rem] bg-gray-800 border-red-600 border-solid border-8 rounded-full flex items-center ${style}`}>
      <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-gray-400 ml-1 bg-[url('/pokeballs/${firstType.type}-pokeball.svg')] bg-cover rotate-[-40deg]`}>
        <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt={`name sprite`} width={80} height={80} className="w-20 h-20 rotate-[40deg]"/>
      </div>
      <div className="text-gray-400 w-[10.5rem] h-full ml-1 py-1 flex flex-col justify-between">
        <div className="flex flex-row justify-between">
          <h2 className="text-base font-bold">{name}</h2>
          <span>
            {pokemonNumber}
          </span>
        </div>
        <div className="flex flex-col text-sm">
          <span>
            Peso: {weight}kg
          </span>
          <span>
            Altura: {height}m
          </span>
        </div>
        <div className="flex flex-row justify-between text-sm">
          {
            types.map(({type, portugueseType}, index) => {
              return (
                <span key={index} className={`w-20 h-6 bg-${type} flex justify-center items-center rounded-full font-bold pt-[3px] text-shadow`}>
                  {portugueseType}
                </span>
              )
            })
          }
        </div>
      </div>
      <Image src={`/pokeballs/${firstType.type}-pokeball.svg`} alt="green pokeball" width={68} height={68} className="absolute ml-48 mb-4 opacity-20" />
    </li>
  )
}