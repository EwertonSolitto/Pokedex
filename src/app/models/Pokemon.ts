import PokemonPortugueseTypes from "./PokemonPortugueseTypes"
import PokemonTypes from "./PokemonTypes"

type Pokemon = {
  id: number,
  name: string,
  types: Array<PokemonType>,
  height: number,
  weight: number,
}

export type PokemonType = {
  portugueseType: PokemonPortugueseTypes
  type: PokemonTypes
}

export default Pokemon