import PossibleNumbers from "../models/PossibleNumbers"

export default function whereIsThePokemon(pokemonNumber: PossibleNumbers): string {
  switch(pokemonNumber) {
    case 0:
      return 'current-pokemon'
    case 1:
      return 'closest-pokemon-bottom'
    case -1:
      return 'closest-pokemon-top'
    case 2:
      return 'middle-pokemon-bottom'
    case -2:
      return 'middle-pokemon-top'
    case 3:
      return 'further-pokemon-bottom'
    case -3:
      return 'further-pokemon-top'
    case 4:
      return 'last-pokemon-bottom'
    case -4:
      return 'last-pokemon-top'
    case 5:
      return 'bottom'
    case -5:
      return 'top'
  }
}