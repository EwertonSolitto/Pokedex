import PokemonPortugueseTypes from "../models/PokemonPortugueseTypes";
import PokemonTypes from "../models/PokemonTypes";

export default function translateType(type: PokemonTypes): PokemonPortugueseTypes {
  switch(type) {
    case "bug":
      return "Inseto" 
    case "dark":
      return "Sombrio"
    case "dragon":
      return "Dragão"
    case "electric":
      return "Elétrico"
    case "fairy":
      return "Fada"
    case "flying":
      return "Voador"
    case "fighting":
      return "Lutador"
    case "fire":
      return "Fogo"
    case "ghost":
      return "Fantasma"
    case "grass":
      return "Planta"
    case "ground":
      return "Terrestre"
    case "ice":
      return "Gelo"
    case "normal":
      return "Normal"
    case "poison":
      return "Venenoso"
    case "psychic":
      return "Psíquico"
    case "rock":
      return "Pedra"
    case "steel":
      return "Aço"
    case "water":
      return "Água"
  }
}