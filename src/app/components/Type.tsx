import PokemonPortugueseTypes from "../models/PokemonPortugueseTypes"
import PokemonTypes from "../models/PokemonTypes"

type TypeProps = {
  type: {
    type: PokemonTypes
    portugueseType: PokemonPortugueseTypes
  }
}

export default function Type({type}: TypeProps) {
  return (
    <span className={`w-20 h-6 bg-${type.type} flex justify-center items-center rounded-full font-bold pt-[3px] text-shadow text-sm`}>
      {type.portugueseType}
    </span>
  )
}