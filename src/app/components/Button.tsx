import Link from "next/link";
import { ReactNode } from "react";

export default function Button({addOrSub, pokemonId, isDisabled, children}: {
  addOrSub: 'add' | 'sub',
  pokemonId: number,
  isDisabled: boolean
  children: ReactNode
}) {
  if (!isDisabled) addOrSub === 'add' ? pokemonId++ : pokemonId--

  return (
    <Link href={`?${new URLSearchParams({pokemon: pokemonId.toString()})}`} className="w-12 h-12 border-gray-800 border-2 rounded-full flex items-center justify-center">
      {children}
    </Link>
  )
}