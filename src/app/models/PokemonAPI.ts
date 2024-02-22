import PokemonTypes from "./PokemonTypes"

type PokemonAPI = {
  id: number,
  name: string,
  height: number,
  weight: number
  types: Array<{type: {name: PokemonTypes}}>
}

export default PokemonAPI