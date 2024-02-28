import Link from "next/link";

export default function Button({
  content,
  addOrSub,
  pokemonId,
  isDisabled
}: {
  content: string,
  addOrSub: 'add' | 'sub',
  pokemonId: number,
  isDisabled: boolean
}) {
  if (!isDisabled) addOrSub === 'add' ? pokemonId++ : pokemonId--

  return (
    <Link 
      href={`?${new URLSearchParams({
        pokemon: pokemonId.toString()
      })}`}
      className="w-10 h-40 bg-electric"
    >
      {content}
    </Link>
  )
}