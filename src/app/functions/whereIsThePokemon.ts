import PossibleNumbers from "../models/PossibleNumbers"

export default function whereIsThePokemon(pokemonNumber: PossibleNumbers): string {
  switch(pokemonNumber) {
    case 0:
      return 'current-pokemon'
    case 1:
      return 'second-pokemon-bottom'
    case -1:
      return 'second-pokemon-top'
    case 2:
      return 'third-pokemon-bottom'
    case -2:
      return 'third-pokemon-top'
    case 3:
      return 'fourth-pokemon-bottom'
    case -3:
      return 'fourth-pokemon-top'
    case 4:
      return 'fifth-pokemon-bottom'
    case -4:
      return 'fifth-pokemon-top'
    case 5:
      return 'last-bottom'
    case -5:
      return 'last-top'
  }
}