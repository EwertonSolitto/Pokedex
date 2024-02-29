import PokemonCard from "./components/PokemonCard";
import getAllPokemons from "./functions/getAllPokemons";
import Button from "./components/Button";

export default async function Home({
  searchParams,
}: {
  searchParams: { [ key: string ]: string | string[] | undefined }
}) {
  const res = await (await fetch('https://pokeapi.co/api/v2/pokedex/1/', { cache: 'force-cache' })).json()
  const pokedexLength = res.pokemon_entries.length

  let pokemonId = Number((searchParams.pokemon || 1));
  if (pokemonId < 1) pokemonId = 1
  if (pokemonId > pokedexLength) pokemonId = pokedexLength

  const pokemons = await getAllPokemons(pokemonId)

  return (
    <main className="absolute w-full h-screen overflow-hidden">
        {/* <div className="absolute w-full h-screen border-red-600 border-8 z-50"></div>
        <div className="absolute w-screen bg-red-600 h-60 bottom-0 z-50"></div> */}

      <div className="absolute w-40 flex z-50">
        <Button addOrSub="add" content="+1" isDisabled={false} pokemonId={pokemonId}/>
        <Button addOrSub="sub" content="-1" isDisabled={pokemonId === 1 ? true : false} pokemonId={pokemonId}/>
      </div>
        <ol className="absolute w-full h-full flex align-center justify-center">
          {
            pokemons.map(({pokemon, style}, index) => (<PokemonCard key={index} pokemon={pokemon} style={style} />))
          }
        </ol>
    </main>
  )
}
