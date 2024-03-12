import PokemonCard from "./components/PokemonCard";
import getAllPokemons from "./functions/getAllPokemons";
import Button from "./components/Button";
import Arrow from "./components/Arrow";
import Menu from "./components/Menu";

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
  const selectedPokemon  = pokemons.find(({ pokemon }) => pokemon.id === pokemonId) || pokemons[0]

  return (
    <main className="absolute w-full h-screen overflow-hidden">
      <div className="absolute w-full h-screen border-red-600 border-[16px] z-50"></div>
      <div className="absolute w-full h-screen grid grid-rows-[2fr_1fr] justify-between">
        <div className="w-auto h-[102%] border-red-600 border-[16px] rounded-[32px] z-50"></div>
        <Menu pokemon={selectedPokemon.pokemon} />
      </div>

      <div className="absolute bottom-20 left-4 w-40 flex flex-col-reverse z-50 gap-5">
        <Button addOrSub="add" isDisabled={false} pokemonId={pokemonId} >
          <div className="rotate-180">
            <Arrow />
          </div>
        </Button>
        <Button addOrSub="sub" isDisabled={pokemonId === 1 ? true : false} pokemonId={pokemonId} >
          <div>
            <Arrow />
          </div>
        </Button>
      </div>
        <ol className="absolute w-full h-3/4 flex align-center justify-center">
          {
            pokemons.map(({pokemon, style}, index) => (<PokemonCard key={index} pokemon={pokemon} style={style} />))
          }
        </ol>
    </main>
  )
}
