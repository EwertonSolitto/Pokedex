import PokemonCard from "./components/PokemonCard";
import { getPokemon } from "./functions/getPokemon";
import translateType from "./functions/translateType";
import Pokemon, { PokemonType } from "./models/Pokemon";

export default async function Home() {
  const pokemonJSON: any = await getPokemon(1008)
  
  const pokemonTypes: PokemonType[] = []

  for(let i = 0; i < pokemonJSON.types.length; i++) {
    const type = pokemonJSON.types[i]

    pokemonTypes.push({
      type: type.type.name,
      portugueseType: translateType(type.type.name)
    })
  }

  const pokemon: Pokemon = {
    id: pokemonJSON.id,
    name: pokemonJSON.name.charAt(0).toUpperCase() + pokemonJSON.name.slice(1),
    height: pokemonJSON.height,
    weight: pokemonJSON.weight,
    type: pokemonTypes
  }

  return (
    <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
      <div className="w-[70rem] h-[50rem] bg-red-600 flex items-center justify-center">
        <div className="w-[50rem] h-[30rem] bg-gray-800 flex justify-center items-center">
          <ol>
            <PokemonCard id={pokemon.id} name={pokemon.name} height={pokemon.height} weight={pokemon.weight} type={pokemon.type} />
          </ol>
        </div>
      </div>
    </div>
  )
}
