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
    <div className="w-full h-screen overflow-hidden">
          <div className="absolute w-40 flex">
            <Button addOrSub="add" content="+1" isDisabled={false} pokemonId={pokemonId}/>
            <Button addOrSub="sub" content="-1" isDisabled={pokemonId === 1 ? true : false} pokemonId={pokemonId}/>
          </div>
          <ol>
            {
              pokemons.map(({pokemon, style}, index) => (<PokemonCard key={index} pokemon={pokemon} style={style} />))
            }
          </ol>
    </div>
  )
}
