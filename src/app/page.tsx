import PokemonCard from "./components/PokemonCard";
import { getPokemon } from "./functions/getPokemon";
import translateType from "./functions/translateType";
import Pokemon, { PokemonType } from "./models/Pokemon";
import PokemonTypes from "./models/PokemonTypes";

type Types = {
  type: {
    name: string
  }
}

type PokemonAPI = {
  id: number,
  name: string,
  height: number,
  weight: number
  types: Array<Types>
}

export default async function Home() {
  const pokemonsResponse = Promise.all([getPokemon(1), getPokemon(2), getPokemon(3), getPokemon(4)])
  
  const pokemons = await pokemonsResponse.then((res) => res.map(({id, name, height, weight, types}) => {
      const pokemonTypes = types.map((type: {type: {name: PokemonTypes}}) => {

        return {
          type: type.type.name,
          portugueseType: translateType(type.type.name)
        }
      })


      return {
        id: id,
        name: name.charAt(0).toUpperCase() + name.slice(1),
        height: height,
        weight: weight,
        types: pokemonTypes
      }
  }))

  return (
    <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-[70rem] h-[50rem] bg-red-600 flex items-center justify-center">
        <div className="w-[50rem] h-[30rem] bg-gray-800 flex justify-center items-center">
          <ol>
            {
              pokemons.map((pokemon, index) => (<PokemonCard key={index} id={pokemon.id} name={pokemon.name} height={pokemon.height} weight={pokemon.weight} type={pokemon.types} />))
            }
          </ol>
        </div>
      </div>
    </div>
  )
}
