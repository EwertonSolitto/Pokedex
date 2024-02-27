import PokemonCard from "./components/PokemonCard";
import getAllPokemons from "./functions/getAllPokemons";

export default async function Home() {
  const pokemons = await getAllPokemons(10)

  return (
    <div className="w-full h-screen overflow-hidden">
          <ol>
            {
              pokemons.map(({pokemon, style}, index) => (<PokemonCard key={index} pokemon={pokemon} style={style} />))
            }
          </ol>
    </div>
  )
}
