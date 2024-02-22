import Pokemon, { PokemonType } from "../models/Pokemon";
import PokemonAPI from "../models/PokemonAPI";
import PokemonTypes from "../models/PokemonTypes";
import { getPokemon } from "./getPokemon";
import translateType from "./translateType";

export default async function getAllPokemons(numbers: number[]): Promise<Pokemon[]> {
  const pokemonsResponse: PokemonAPI[] = await Promise.all(numbers.map((num) => getPokemon(num)))

  const pokemons: Pokemon[] = pokemonsResponse.map(({id, name, height, weight, types}: PokemonAPI) => {
      const pokemonTypes: PokemonType[] = types.map((type: {type: {name: PokemonTypes}}) => {
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
    })

    return pokemons
}