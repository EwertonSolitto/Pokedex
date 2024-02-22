import PokemonCard from "./components/PokemonCard";
import getAllPokemons from "./functions/getAllPokemons";

export default async function Home() {
  const pokemons = await getAllPokemons([1,2,3,4,5])

  return (
    <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
          <ol>
            {
              pokemons.map((pokemon, index) => (<PokemonCard key={index} id={pokemon.id} name={pokemon.name} height={pokemon.height} weight={pokemon.weight} types={pokemon.types} />))
            }
          </ol>
    </div>
  )
}
