import Pokemon, { PokemonType } from "../models/Pokemon";
import PokemonAPI from "../models/PokemonAPI";
import PokemonTypes from "../models/PokemonTypes";
import PossibleNumbers from "../models/PossibleNumbers";
import { getPokemon } from "./getPokemon";
import translateType from "./translateType";
import whereIsThePokemon from "./whereIsThePokemon";

export default async function getAllPokemons(currentPokemon: number): Promise<Array<{
  pokemon: Pokemon,
  style: string
}>> {
  const pokemonNumbers = [currentPokemon, currentPokemon + 1, currentPokemon + 2, currentPokemon + 3, currentPokemon + 4, currentPokemon + 5]

  for(let i = 4; i < 9; i++) {
    if(pokemonNumbers[0] === 1) break

    pokemonNumbers.unshift(pokemonNumbers[0] - 1)
  }

  const pokemonsResponse: PokemonAPI[] = await Promise.all(pokemonNumbers.map((num) => getPokemon(num).catch(() => {
    return {
      id: num,
      name: 'none',
      height: 0,
      weight: 0,
      types: [{type: 'normal'}]
    }
  })))

  const pokemons = pokemonsResponse.map(({id, name, height, weight, types}: PokemonAPI) => {
      const pokemonTypes: PokemonType[] = types.map((type: {type: {name: PokemonTypes}}) => {
        return {
          type: type.type.name,
          portugueseType: translateType(type.type.name)
        }
      })
      const position: PossibleNumbers = id - currentPokemon

      const style = whereIsThePokemon(position) 

      return {
        pokemon: {
          id: id,
          name: name.charAt(0).toUpperCase() + name.slice(1),
          height: height,
          weight: weight,
          types: pokemonTypes
        },
        style: style
      }
    })

    return pokemons
}